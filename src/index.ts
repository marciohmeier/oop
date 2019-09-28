import { Zoo } from './model/zoo'
import { Cage } from './model/cage'
import { Mammal } from './model/mammal'
import { Reptile } from './model/reptile'
import { Bird } from './model/bird'
import { StatusCode } from './model/statusCode'

let status : StatusCode
let zoo = new Zoo("Zoológico do cioMar")


let cage1 = new Cage(4, Mammal)
let cage2 = new Cage(2, Reptile)
let cage3 = new Cage(6, Bird)

status = zoo.addCageToZoo(cage1)
status = zoo.addCageToZoo(cage2)
status = zoo.addCageToZoo(cage3)

status = zoo.addAnimalToZoo(new Bird("Canarinho"))
status = zoo.addAnimalToZoo(new Bird("Arara"))

status = zoo.addAnimalToZoo(new Reptile("Cascavel"))


status = zoo.addAnimalToZoo(new Mammal("Leão"))
status = zoo.addAnimalToZoo(new Mammal("Hipopótamo"))

console.log(cage1.toString())
console.log(cage2.toString())
console.log(cage3.toString())