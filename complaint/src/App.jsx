import './App.css'
function App() {
  return (
    <div className='w-screen h-screen relative overflow-hidden flex justify-center items-center'>
      <span className='w-full h-2 bg-[#eee] absolute top-0 left-0'></span>
      <img src="../public/hand.png" alt="hand" className='h-1/2 max-xl:-right-20 absolute right-0 top-1/2 translate-x-20 -translate-y-1/2 object-contain'/>
      <img src="../public/logo.png" alt="" className='absolute top-5 left-5 w-[100px] h-[100px] object-contain'/>
      <span className='w-screen h-screen opacity-30 absolute bg-blue-800 -right-1/2 -z-10 rounded-full -bottom-1/2 shadow-black shadow-inner'></span>
      <img src="../public/box.png" className='w-[700px] max-xl:w-full max-xl:-bottom-16 absolute -bottom-24 left-1/2 -translate-x-1/2 ' alt="" />
      <button className='bg-[#0b63a2] p-2 rounded-md text-white text-xl'>قدّم شكوى الان</button>
    </div>
  );
}

export default App
