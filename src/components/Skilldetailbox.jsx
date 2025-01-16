

const FakeCodeEditor = () => {


  return (
    <div className=" mx-auto mt-10 rounded-lg overflow-hidden shadow-lg bg-gray-900 skillshowoff">
      <div className="bg-gray-800 flex items-center p-2 border-b border-gray-700">
        <span className="w-3 h-3 rounded-full bg-red-500 mr-2"></span>
        <span className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></span>
        <span className="w-3 h-3 rounded-full bg-green-500"></span>
        <p className="text-gray-400 text-sm ml-auto mr-auto text-center pe-14 text-[1.4em] invert text-purple-500">{'- Skills -'}</p>
      </div>
      <div className="p-4 text-center text-gray-200 text-sm font-mono whitespace-pre-wrap leading-relaxed skillholder">
   <font className='text-red-500'>#HTML</font>  <font className="text-blue-500">#CSS</font>  <font className="text-yellow-500">#JavaScript</font>  <font className="text-[#61DAFB]">#React</font>  <font className="text-green-300">#Node.js</font>  <font className="text-sky-400">#TailwindCSS</font>  <font className='text-[#7711ED]'>#Bootstrap</font>
      </div>
    </div>
  );
};

export default FakeCodeEditor;
