class Alakzat {
    constructor(szin, tipus) {
        this.szin = szin;
        this.tipus = tipus;
    }
    letrehoz() {
        const div = document.createElement('div');
        div.style.backgroundColor = this.szin;
        div.style.width = '100px';
        div.style.height = '100px';
        div.style.margin = '10px';
        div.style.display = 'inline-block';
        div.innerHTML = this.tipus;
        document.getElementById('grafika-kontener').appendChild(div);
    }
}

class Kor extends Alakzat {
    constructor(szin) {
        super(szin, 'Kör');
    }
    letrehoz() {
        super.letrehoz();
        const utolso = document.getElementById('grafika-kontener').lastChild;
        utolso.style.borderRadius = '50%';
    }
}