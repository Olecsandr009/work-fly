export function radio() {
    const radioLabel = document.querySelectorAll("[data-label-radio]");
    const radioInput = document.querySelectorAll("[data-input-radio]");

    // console.log(radioInput);

    if (radioInput) {
        function radioAllClose() {
            for (let i = 0; i < radioLabel.length; i++) {
                radioLabel[i].classList.remove("checked");
            }
        }
        for (let i = 0; i < radioInput.length; i++) {
            radioInput[i].addEventListener("change", e => {
                console.log("1")
                if (radioLabel) {
                    for (let a = 0; a < radioLabel.length; a++) {
                        radioAllClose();

                        radioLabel[a].classList.add("checked");
                    }
                }
            })
        }

    }
}