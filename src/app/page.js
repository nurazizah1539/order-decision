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
    { qty: 1, name: 'Es Krim Yogurt', key:'yogurt' },
    { qty: 4, name: 'Es Krim Strawberry', key: 'berry' },
    { qty: 3, name: 'Es Krim Coklat', key: 'co' },
    { qty: 5, name: 'Es Krim Matcha', key: 'cha' },
  ]
  
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
    let label = "[pilih menu dulu dong cantik]"
    let choosen
    if(first == 0) {
      label = {
        name: '... Bentar.. Anda Milih Apaan..'
      }
    }else if(second == 0) {
      label = {
        name: '... Bentar.. Anda Milih Apaan..'
      }
    }else if(first > second) {
      choosen = first
      label = menusAvailable.find(elm =>  elm.qty == choosen);
    }else if(second> first){
      choosen = second
      label = menusAvailable.find(elm =>  elm.qty == choosen);
    }else{
      label = {
        name: '... Bentar.. Anda Milih Apaan..'
      }
    }
    setMenu(label?.name);

    setVisible(true)
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
       <div className='flex flex-row justify-between w-[50vw]'>
       <select className='p-10 text-blue-600' onChange={(val) => handleMenu(val.target.value, 'first')} autoFocus name='Order1' placeholder='masukan menu pertama'>
        {menusAvailable.map(el => <option key={el.key} value={el.qty}>{el.name}</option>)}
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
