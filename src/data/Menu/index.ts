import { Menu } from '@/types/Menu'
import {FaIceCream, FaPizzaSlice, FaFish, FaHotdog, FaDrumstickBite, FaAppleAlt } from 'react-icons/fa'
import { FaBurger } from 'react-icons/fa6'
import { GiCupcake, GiNoodles, GiSushis, GiTacos, GiChickenOven } from 'react-icons/gi'
import { MdRamenDining, MdFastfood } from 'react-icons/md'

const index: Menu[] = [
  { Icon: FaBurger, Text: "Burger" },
  { Icon: FaPizzaSlice, Text: "Pizza" },
  { Icon: GiCupcake, Text: "Cup Cake" },
  { Icon: MdRamenDining, Text: "Ramen" },
  { Icon: FaIceCream, Text: "Ice Cream" },
  { Icon: GiTacos, Text: "Tacos" },
  { Icon: FaHotdog, Text: "Hot Dog" },
  { Icon: GiSushis, Text: "Sushi" },
  { Icon: FaDrumstickBite, Text: "Fried Chicken" },
  { Icon: GiNoodles, Text: "Noodles" },
  { Icon: FaFish, Text: "Fish & Chips" },
  { Icon: FaAppleAlt, Text: "Salad" },
  { Icon: GiChickenOven, Text: "Roast Chicken" },
  { Icon: MdFastfood, Text: "Fast Food Combo" },
]
export default index