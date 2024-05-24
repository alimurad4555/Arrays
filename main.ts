type principleType = {
    name:string,
    age:number

}
type teacherType = {
    designation: string
}

type CommonType = principleType & teacherType

let person1 = {
    name: "fahad khan",
    age: 23,
    designation:"teacher"
}

