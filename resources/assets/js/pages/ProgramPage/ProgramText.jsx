import React, { Component } from 'react';
import {withStyles} from "@material-ui/core";

const styles = theme => ({
    paragraph: {
        textAlign: 'justify',
        fontSize: '30px',
        padding: '32px 72px;',
        [theme.breakpoints.down("sm")]: {
            padding: '16px 48px',
            fontSize: '18px',
            textAlign: 'justify',
        },
    }
});

class ProgramText extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const { classes } = this.props;
        return (
            <div className="third-paragraph-container">
                <p className={classes.paragraph}>
                    Наша програма націлена на максимальну зайнятість дітей, щоб в них не було часу нудьгувати.
                    Основний напрямок програми - туризм. Ми навчаємо дітей користуватись туристичним спорядженням,
                    ходимо в походи, працюємо з мотузками та вилазимо на скелі.
                    Ми поєднюємо фізичну активність з творчими, розважальними та пізнавальними заходами,
                    розвиваємо в дітях жагу до нових знань, креативність, почуття гумору, працюємо над їх фізичною підготовкою.
                    В нас до кожного знайдеться індивідуальний підхід, без уваги не залишиться жодна дитина.
                </p>
            </div>
        );
    }
}

export default withStyles(styles)(ProgramText);


