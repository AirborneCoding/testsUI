import { WiStars } from "react-icons/wi";

const Section1 = () => {
    return (
        <section>
            <div className='flex flex-col md:flex-row justify-between'>
                <h5 className='text-base font-bold text-blue-600'>
                    Analyse sémantique des avis positifs
                </h5>
                <div className='flex  space-x-3'>
                    <form action="" className='p-1 bg-white'>
                        <input type="date" />
                    </form>
                    <button className="btn btn-primary btn-sm text-sky-300">
                    <WiStars className="text-yellow-500 font-bold" /> Générer rapport IA
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Section1