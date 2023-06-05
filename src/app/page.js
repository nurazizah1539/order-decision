"use client";
import { useState } from 'react';

export default function Home() {
  const [visible, setVisible] = useState(false);
  const [menu, setMenu] = useState('');
  const [first, setFirst] = useState(0);
  const [second, setSecond] = useState(0);

  const menusAvailable = [
    { qty: 0, name: '--Pilih salah satu--', key:'all' },
    { qty: 2, name: 'Berry Bean Sundae', key:'berrybean' },
    { qty: 1, name: 'Yogurt', key:'yogurt' },
    { qty: 4, name: 'Strawberry', key: 'berry' },
    { qty: 3, name: 'Coklat', key: 'co' },
    { qty: 5, name: 'Matcha', key: 'cha' },
  ]


  const list = [
    { qty: 10, size: 'XXL' },
    { qty: 2, size: 'XL' },
    { qty: 8, size: 'M' }
  ]
  
  list.sort((a, b) => (a.qty > b.qty) ? 1 : -1)
  
  function handleMenu(value, order) {
    console.log(order, "aa", value)
    if(order === 'first') {
      setFirst(value)
    }
    if(order === 'second') {
      setSecond(value);
    }
  }

  function generateAnswer() {
    let label = "[pilih menu dulu bambang]"
    let choosen
    if((first || second) == 0) {
      label = {
        name: '... Bentar.. Lu Milih Apaan..'
      }
    }else if(first > second) {
      choosen = first
      label = menusAvailable.find(elm =>  elm.qty == choosen);
    }else if(second> first){
      choosen = second
      label = menusAvailable.find(elm =>  elm.qty == choosen);
    }else{
      label = {
        name: '... Bentar.. Lu Milih Apaan..'
      }
    }
    setMenu(label?.name);

    setVisible(true)
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
       <div className='flex flex-row justify-between w-[50vw]'>
       <select className='p-10 text-blue-600' onChange={(val) => handleMenu(val.target.value, 'first')} autoFocus name='Order1' placeholder='masukan menu pertama'>
        {menusAvailable.map(el => <option value={el.qty}>{el.name}</option>)}
       </select>
       <select className='p-10 text-blue-600' onChange={(val) => handleMenu(val.target.value, 'second')} autoFocus name='Order1' placeholder='masukan menu pertama'>
        {menusAvailable.map(el => <option key={el.key} value={el.qty}>{el.name}</option>)}
       </select>
       </div>
       <button onClick={generateAnswer} className='bg-blue-300 p-2 rounded-xl text-white m-3 hover:bg-blue-700'>Choose Between</button>
        {visible && <p>
            Harap Beli {menu}
          </p>}
          <p className='mb-[50vh]'></p>
    </main>
  )
}
