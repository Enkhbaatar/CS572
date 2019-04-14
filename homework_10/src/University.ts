class University {
    constructor(public name: string, public dept: string) { }

    graduation(year: number) {
        console.log(`Graduation ${this.dept} ${year} students`)
    }
}

var mum = new University("MUM", "Computer science");
mum.graduation(2019);