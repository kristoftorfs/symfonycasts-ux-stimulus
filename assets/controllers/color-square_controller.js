import { Controller } from 'stimulus';

export default class extends Controller {
    static targets = ['colorSquare', 'select'];
    static values = {
        colorId: Number
    }

    connect()
    {
        this.selectTarget.classList.add('d-none');
        this.colorSquareTargets.forEach((element) => {
            element.classList.remove('d-none');
        });
    }

    selectColor(e) {
        const clickedColor = e.currentTarget.dataset.colorId;
        this.colorIdValue = clickedColor == this.colorIdValue ? null : clickedColor;
    }

    colorIdValueChanged() {
        this.selectTarget.value = this.colorIdValue;

        this.colorSquareTargets.forEach((element) => {
            if (element.dataset.colorId == this.colorIdValue) {
                element.classList.add('selected');
            } else {
                element.classList.remove('selected');
            }
        });
    }
}