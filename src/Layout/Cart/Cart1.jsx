import tas1 from "../../assets/gambar_tas/tas-kulit.png";
const Cart1 = () => {
  return (
    <div className="scroll-smooth">
      <div className=" lg:mx-auto  xl:container w-full flex  flex-col  gap-6 sm:gap-10  ">
        <div className="sticky top-14 w-full  left-0 right-0 h-17 items-center flex justify-center  bg-[#275f3e] text-white">
          <h1 className="text-xl font-Momo font-bold">Your Cart</h1>
        </div>
        <div className="flex  gap-10 px-3 justify-center">
          <table className="border-collapse text-sm  ">
            <thead className=" text-[#636060]  ">
              <tr className="w-full border-collapse text-sm  border-b ">
                <th className="py-3 px-10 font-medium">Product</th>
                <th className="text-left py-3 px-10 font-medium">Price</th>
                <th className="text-left py-3 px-10 font-medium">Quantity</th>
                <th className="text-left py-3 px-10 font-medium">Total</th>
              </tr>
            </thead>
            <tbody className=" border-black border-collapse">
              <tr className="border-b font-medium text-sm ">
                <td className="py-9 px-10 flex gap-2 items-center justify-center">
                  <div className="border p-2 bg-[#cdcdcd] rounded">
                    <img src={tas1} alt="" className="w-15 h-15" />
                  </div>
                  <p>Tas Kulit</p>
                </td>
                <td className="py-9 px-10 ">20000</td>
                <td className="py-9 px-10 ">Tas Kulit</td>
                <td className="py-9 px-10 ">Tas Kulit</td>
              </tr>
              <tr className="border-b font-medium text-sm ">
                <td className="py-9 px-10 flex gap-2 items-center justify-center">
                  <div className="border p-2 bg-[#cdcdcd] rounded">
                    <img src={tas1} alt="" className="w-15 h-15" />
                  </div>
                  <p>Tas Kulit</p>
                </td>
                <td className="py-9 px-10 ">20000</td>
                <td className="py-9 px-10 ">Tas Kulit</td>
                <td className="py-9 px-10 ">Tas Kulit</td>
              </tr>
              <tr className="border-b font-medium text-sm ">
                <td className="py-9 px-10 flex gap-2 items-center justify-center">
                  <div className="border p-2 bg-[#cdcdcd] rounded">
                    <img src={tas1} alt="" className="w-15 h-15" />
                  </div>
                  <p>Tas Kulit</p>
                </td>
                <td className="py-9 px-10 ">20000</td>
                <td className="py-9 px-10 ">Tas Kulit</td>
                <td className="py-9 px-10 ">Tas Kulit</td>
              </tr>
              <tr className="border-b font-medium text-sm ">
                <td className="py-9 px-10 flex gap-2 items-center justify-center">
                  <div className="border p-2 bg-[#cdcdcd] rounded">
                    <img src={tas1} alt="" className="w-15 h-15" />
                  </div>
                  <p>Tas Kulit</p>
                </td>
                <td className="py-9 px-10 ">20000</td>
                <td className="py-9 px-10 ">Tas Kulit</td>
                <td className="py-9 px-10 ">Tas Kulit</td>
              </tr>
              <tr className="border-b font-medium text-sm ">
                <td className="py-9 px-10 flex gap-2 items-center justify-center">
                  <div className="border p-2 bg-[#cdcdcd] rounded">
                    <img src={tas1} alt="" className="w-15 h-15" />
                  </div>
                  <p>Tas Kulit</p>
                </td>
                <td className="py-9 px-10 ">20000</td>
                <td className="py-9 px-10 ">Tas Kulit</td>
                <td className="py-9 px-10 ">Tas Kulit</td>
              </tr>
              <tr className="border-b font-medium text-sm ">
                <td className="py-9 px-10 flex gap-2 items-center justify-center">
                  <div className="border p-2 bg-[#cdcdcd] rounded">
                    <img src={tas1} alt="" className="w-15 h-15" />
                  </div>
                  <p>Tas Kulit</p>
                </td>
                <td className="py-9 px-10 ">20000</td>
                <td className="py-9 px-10 ">Tas Kulit</td>
                <td className="py-9 px-10 ">Tas Kulit</td>
              </tr>
              <tr className="border-b font-medium text-sm ">
                <td className="py-9 px-10 flex gap-2 items-center justify-center">
                  <div className="border p-2 bg-[#cdcdcd] rounded">
                    <img src={tas1} alt="" className="w-15 h-15" />
                  </div>
                  <p>Tas Kulit</p>
                </td>
                <td className="py-9 px-10 ">20000</td>
                <td className="py-9 px-10 ">Tas Kulit</td>
                <td className="py-9 px-10 ">Tas Kulit</td>
              </tr>
            </tbody>
          </table>
          <div className="fixed bottom-0 h-10 w-full right-0 bg-[#275f3e] px-12 flex items-center justify-between text-white font-medium text-sm">
            <div>
              {" "}
              <h1 className="text-sm">Order Summory</h1>
              <div className="w-full hidden border-b border-[#6b6868]"></div>
            </div>
            <div className="text-[11px]">
              <h1>
                subtotal: <span>12000</span>
              </h1>
            </div>
            <div className="text-[11px]">
              <h1>
                Total: <span>20000</span>
              </h1>
            </div>
            <button className="cursor-pointer border py-1 px-2 bg-black rounded font-serif">
              CHEKOUT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cart1;
