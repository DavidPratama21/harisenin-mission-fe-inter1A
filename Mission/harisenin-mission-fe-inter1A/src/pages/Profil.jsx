import Profil_img from "../assets/Avatar_tutor/1.png";
import Profil_layout from "../layouts/Profil_layout";
import Menu_daftar from "../components/molecules/Menu_daftar";

const Profil = () => {
    return (
        <Profil_layout>
            <div className="relative top-19.5 mb-16 grid gap-6 px-5 py-7 ">
                {/* 4801 */}
                <div className="grid gap-6">
                    {/* 3692 */}
                    <div className="grid gap-2.5">
                        <p className="font-semibold text-xl leading-[120%] text-dark-primary">
                            Ubah Profil
                        </p>
                        <p className="leading-[140%] tracking-[0.2px] text-dark-secondary">
                            Ubah data diri Anda
                        </p>
                    </div>
                    <Menu_daftar />
                </div>
                {/* 3879 */}
                <div className="grid gap-6 p-6 rounded-[10px] bg-other-primary border border-other-border">
                    {/* 4428 */}
                    <div className="flex gap-3.5">
                        <img
                            src={Profil_img}
                            alt="Profil Avatar"
                            className="size-15 aspect-square object-cover rounded"
                        />
                        {/* 4427 */}
                        <div className="grid leading-[140%] tracking-[0.2px]">
                          <p className="text-semibold leading-[120%] text-dark-secondary">Jennie Ruby Jane</p>
                          <p className="text-dark-primary">rubyjane@gmail.com</p>
                          <p className="font-bold text-sm text-tertiary">Ganti Foto Profil</p>
                        </div>
                    </div>
                    <span className="w-full border bg-other-border"></span>
                    {/* 4420 */}
                    <div className="grid gap-4 ">
                      <div className="grid gap-4">
                        
                      </div>
                    </div>
                </div>
            </div>
        </Profil_layout>
    );
};

export default Profil;
