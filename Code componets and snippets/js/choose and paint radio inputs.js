/*loop so when radio button is activated, only the corresponded label is painted+calculator*/
for (let i = 0; i < tip.length; i++) {
    const tipsLabel = tip[i].closest('label');
    tip[i].onclick = () => {
        for (let i = 0; i < labels.length; i++) {
            labels[i].style.color = 'white';
            labels[i].style.backgroundColor = '#00494d';
        }
        customTip.value = null;
        tipsLabel.style.color = "#00494d";
        tipsLabel.style.backgroundColor = "#26c2ad";
        calculate();
    }
}