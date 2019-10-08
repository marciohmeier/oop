import { Zoo } from './model/zoo'
import { Cage } from './model/cage'
import { Mammal } from './model/mammal'
import { Reptile } from './model/reptile'
import { Bird } from './model/bird'
import { StatusCode } from './model/statusCode'

let status : StatusCode
let zoo = new Zoo("Zoológico do cioMar & casLu")

status = zoo.addCageToZoo(new Cage(4, Mammal))
status = zoo.addCageToZoo(new Cage(2, Reptile))
status = zoo.addCageToZoo(new Cage(6, Bird))

status = zoo.addAnimalToZoo(new Bird("Canarinho"))
if (status.checkError()) {
  console.log(status.getErrorMessage())
}
status = zoo.addAnimalToZoo(new Bird("Arara"))
if (status.checkError()) {
  console.log(status.getErrorMessage())
}

status = zoo.addAnimalToZoo(new Reptile("Cascavel"))
if (status.checkError()) {
  console.log(status.getErrorMessage())
}

status = zoo.addAnimalToZoo(new Reptile("Lagarto"))
if (status.checkError()) {
  console.log(status.getErrorMessage())
}

status = zoo.addAnimalToZoo(new Reptile("Jacaré"))
if (status.checkError()) {
  console.log(status.getErrorMessage())
}

status = zoo.addAnimalToZoo(new Mammal("Leão"))
if (status.checkError()) {
  console.log(status.getErrorMessage())
}

status = zoo.addAnimalToZoo(new Mammal("Hipopótamo"))
if (status.checkError()) {
  console.log(status.getErrorMessage())
}

console.log(zoo.toString())