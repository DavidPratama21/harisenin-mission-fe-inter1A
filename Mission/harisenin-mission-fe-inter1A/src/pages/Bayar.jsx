import WaktuPembayaran from '../components/molecules/Waktu_pembayaran'
import Bayar_layout from "../layouts/Bayar_layout"

const Bayar = () => {
  return (
    <>
        <Bayar_layout>
            <WaktuPembayaran />
            <div className='relative top-16 mb-16 '>

            </div>
        </Bayar_layout >
    </>
  )
}

export default Bayar