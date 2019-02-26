<?php

namespace App\Http\Controllers\Content;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

class TourController extends Controller
{
    protected $message;

	public function getAllTours(Request $request)
	{
		// $data = array();
		$information = DB::table('tours')->where('open', '=', 1)->get();
		return $information;
	}

	public function bookTour(Request $request)
    {
        try {
            $id = DB::table('bookings')->insertGetId([
                'firstName' => isset($request['firstName']) && !empty($request['firstName']) ? $request['firstName'] : '',
                'lastName' => isset($request['lastName']) && !empty($request['lastName']) ? $request['lastName'] : '',
                'fatherName' => isset($request['fatherName']) && !empty($request['fatherName']) ? $request['fatherName'] : '',
                'birthDate' => isset($request['birthDate']) && !empty($request['birthDate']) ? $request['birthDate'] : '',
                'address' => isset($request['address']) && !empty($request['address']) ? $request['address'] : '',
                'parentsInfo' => isset($request['parentsInfo']) && !empty($request['parentsInfo']) ? $request['parentsInfo'] : '',
                'tourId' => isset($request['tourId']) && !empty($request['tourId']) ? $request['tourId'] : '',
                'size' => isset($request['size']) && !empty($request['size']) ? $request['size'] : 'm',
                'gender' => isset($request['gender']) && !empty($request['gender'])? $request['gender'] : 'male',
                'transferFirst' => isset($request['transferFirst']) && !empty($request['transferFirst']) ? $request['transferFirst'] : 'kiev',
                'transferBack' => isset($request['transferBack']) && !empty($request['transferBack'])? $request['transferBack'] : 'kiev',
            ]);
//            $bookingInfo = [];
            $bookingInfo = $this->sendTourOnEmail($id);
            return [
                'id' => $id,
                'status' => true,
                'message' => 'Дякуємо за бронювання! Ми зв\'яжемося з вами протягом 24-х годин',
                'bookingInfo' => $bookingInfo['bookingInfo'],
            ];
        } catch (\Exception $exception) {
            return [
                'status' => false,
                'message' => 'Упс, помилка на сервері. Спробуйте надіслати повторний запит, або зателефонуйте за номером +380990386661',
                'error' => $exception,
                'additionalError' => json_decode($exception->getMessage())
            ];
        }
    }

    protected function sendTourOnEmail($bookId)
    {
        $bookingInfo = $this->getBookingInfo($bookId);
        $this->buildConfirmMessage((array)$bookingInfo[0]);
        $result = $this->sendEmail();
        return [
            'mailResult' => $result,
            'bookingInfo' => $bookingInfo
        ];
    }

    protected function getBookingInfo($bookId)
    {
            $bookingInfo = DB::table('bookings')
                ->select('*')
                ->leftjoin('tours', 'bookings.tourId', '=', 'tours.id')
                ->where('bookings.id', '=', $bookId)
                ->get();
            return $bookingInfo;
    }

    protected function buildConfirmMessage($bookingInfo)
    {
//        return $bookingInfo;
        $gender = $bookingInfo['gender'] == 'male' ? 'Хлопчик' : 'Дівчинка';
        $body = "Нове бронювання: " . '<br />'
            . 'Прізвище: ' . $bookingInfo['lastName'] . '<br />'
            . 'Ім\'я: ' . $bookingInfo['firstName'] . '<br />'
            . 'По батькові: ' . $bookingInfo['fatherName'] . '<br />'
            . 'Дата народження: ' . $bookingInfo['birthDate'] . '<br />'
            . 'Стать: ' . $gender . '<br />'
            . 'Розмір футболки: ' . $bookingInfo['size'] . '<br />'
            . 'Контакти батьків: ' . $bookingInfo['parentsInfo'] . '<br />'
            . 'Назва заїзду: ' . $bookingInfo['title'] . '<br />'
            . 'Початок заїзду: ' . $bookingInfo['tour_start'] . '<br />'
            . 'Кінець заїзду: ' . $bookingInfo['tour_end'] . '<br />'
            . 'Трансфер туди з: ' . $bookingInfo['transferFirst'] . '<br />'
            . 'Трансфер назад до: ' . $bookingInfo['transferBack'] . '<br />';

//        return $body;
        $subject = "New booking in Driada summer camp!";
        $this->message = [
            'body' => $body,
            'subject' => $subject,
            'reciever' => 'litodriada@gmail.com'
        ];
    }

    protected function sendEmail()
    {
        try {
            $mailer = $this->initializeMailer();
            $mailer = $this->addGmailCredentials($mailer);
            $mailer->addAddress($this->message['reciever']);
            $mailer->send();
            return [
                'success' => 'Iahooo!!! All good'
            ];
        } catch (Exception $e) {
            return [
                'success' => "Email not sent. " . $mailer->ErrorInfo . PHP_EOL
            ];
        }
    }

    private function initializeMailer()
    {
        $mailer = new PHPMailer(true);
        $mailer->isSMTP();
        $mailer->SMTPAuth = true;
        $mailer->SMTPSecure = 'tls';
        $mailer->Port = 2525;
        $mailer->setFrom('bookings@litodriada.com.ua', 'Driada');
        $mailer->Subject = $this->message['subject'];
        $mailer->Body = $this->message['body'];
        $mailer->isHTML(true);
        $mailer->AltBody = $this->message['body'];
        return $mailer;
    }

    private function addGmailCredentials($mailer)
    {
//        $mailer->Username = 'litodriada@gmail.com';
//        $mailer->Password = 'f?,?d?u?l?095';
//        $mailer->Host = 'smtp.gmail.com';

        $mailer->Username = 'bookings@litodriada.com.ua';
        $mailer->Password = 'm7BV1T4Kock2';
        $mailer->Host = 'mail.adm.tools';
        return $mailer;
    }
}
