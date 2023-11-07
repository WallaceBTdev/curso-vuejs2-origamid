import DolarHoje from "./DolarHoje.js"

export default {
    name: "AcaoHoje",
    components: {
        DolarHoje
    },
    data() {
        return {
            valorDolar: 0,
        }
    },
    template: `
        <div>
            <p>Valor da Apple: {{valorDolar}}</p>
            <dolar-hoje></dolar-hoje>
        </div>
    `,
    methods: {
        puxarAcao() {
            fetch("https://api.iextrading.com/1.0/stock/aapl/quote")
                .then(r => r.json())
                .then(r => {
                    this.valorDolar = r.rates.BRL.toFixed(2)
                })
        }
    },
    created() {
        this.puxarAcao()
    }
}