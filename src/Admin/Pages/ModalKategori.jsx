import { useContext, useState } from "react";

import { CategoryProduct } from "../Context/CategoryContext";

const ModalKategori = ({ isOpen, onClose }) => {
  //   if (!isOpen) return null;
  //   if (!isOpen) return null;
  if (!isOpen) return null;

  const { addCategory } = useContext(CategoryProduct);
  const [namapKat, setNamaKat] = useState("");
  const [gambar, setGambar] = useState(null);
  const [view, Setview] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("nama : ", namapKat, "gambar:", view);
    addCategory({
      namakategori: namapKat,
      gambar: view,
    });
    onClose();
  };
  return (
    <div className="fixed inset-0  bg-black/50 flex items-center justify-center z-50">
      <div className="flex relative flex-col  justify-center font-Roboto bg-white px-6  w-100 py-6 rounded-sm shadow">
        <h1 className="text-center text-green-600 font-semibold">
          Add To Product
        </h1>
        <div className="">
          <button
            onClick={onClose}
            className="absolute top-2 font-semibold right-4 cursor-pointer "
          >
            X
          </button>
          <form
            onSubmit={handleSubmit}
            action=""
            className="flex flex-col py-3 gap-2"
          >
            <div className="relative z-0 w-full  group">
              <input
                value={namapKat}
                onChange={(e) => setNamaKat(e.target.value)}
                type="text"
                className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-b-green-600 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
                placeholder=" "
                required
              />
              <label
                for="floating_email"
                className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-left peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
              >
                Nama Kategori
              </label>
            </div>
            {/* <div className="flex flex-col ">
              <label htmlFor="Nama" className="text-sm">
                Nama Produk
              </label>
              <input
                value={namapKat}
                onChange={(e) => setNamaKat(e.target.value)}
                type="text"
                className="outline rounded  px-2 py-0.5 "
              />
            </div> */}

            {/* <input
              type="file"
              accept="image/*"
              className="h-60 border text-center "
              onChange={(e) => {
                const file = e.target.files[0];
                setGambar(file);

                // buat preview
                Setview(URL.createObjectURL(file));
              }}
            /> */}

            <div class="flex items-center justify-center w-full">
              <label
                for="dropzone-file"
                class="flex flex-col items-center justify-center w-full h-64 bg-neutral-secondary-medium border border-dashed border-default-strong rounded-base cursor-pointer hover:bg-neutral-tertiary-medium"
              >
                <div class="flex flex-col items-center justify-center text-body pt-5 pb-6">
                  <svg
                    class="w-8 h-8 mb-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 17h3a3 3 0 0 0 0-6h-.025a5.56 5.56 0 0 0 .025-.5A5.5 5.5 0 0 0 7.207 9.021C7.137 9.017 7.071 9 7 9a4 4 0 1 0 0 8h2.167M12 19v-9m0 0-2 2m2-2 2 2"
                    />
                  </svg>
                  <p class="mb-2 text-sm">
                    <span class="font-semibold">Click to upload</span> or drag
                    and drop
                  </p>
                  <p class="text-xs">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                </div>
                <input
                  accept="image/*"
                  id="dropzone-file"
                  type="file"
                  className="hidden"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    setGambar(file);

                    // buat preview
                    Setview(URL.createObjectURL(file));
                  }}
                />
                {view && (
                  <img
                    src={view}
                    alt="preview"
                    className="w-32 h-32 object-cover rounded border mt-2"
                  />
                )}
              </label>
            </div>
            {/* {view && (
              <img
                src={view}
                alt="preview"
                className="w-32 h-32 object-cover rounded border mt-2"
              />
            )} */}
            <button
              type="submit"
              className="outline cursor-pointer py-2  text-white mt-2 rounded bg-green-800 hover:bg-green-600"
            >
              Simpan
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ModalKategori;
