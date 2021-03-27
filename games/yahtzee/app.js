const app = new Vue ({
    el: "#app",
    data: {
        dices_upper: [
            //     "&#9856", "&#9857", "&#9858", "&#9859", "&#9860", "&#9861", 
            {
                name: "⚀",
                value: 0
            },
            {
                name: "⚁",
                value: 0
            },
            {
                name: "⚂",
                value: 0
            },
            {
                name: "⚃",
                value: 0
            },
            {
                name: "⚄",
                value: 0
            },
            {
                name: "⚅",
                value: 0
            }
        ],
        dices_lower: [
            {
                name: "3X",
                value: 0
            },
            {
                name: "4X",
                value: 0
            },
            {
                name: "🏠 (25)",
                value: 0
            },
            {
                name: "⛙ (30)",
                value: 0
            },
            {
                name: "⛜ (40)",
                value: 0
            },
            {
                name: "Yathzee (50)",
                value: 0
            },
            {
                name: "Chance",
                value: 0
            },
        ],
        upper_points: 0,
        lower_points: 0,
        total_points: 0
    },
    methods: {
        add() {
            this.upper_points = 0
            this.dices_upper.forEach(x => {
                this.upper_points += Number(x.value)
            });
            this.lower_points = 0
            this.dices_lower.forEach(x => {
                this.lower_points += Number(x.value)
            });
            
            this.total_points = this.upper_points + this.lower_points
            if (this.upper_points >= 63) {
                this.total_points += 35
            }
        }
    }
})