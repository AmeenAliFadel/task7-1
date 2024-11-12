import Card from '../Card/Card'
import './Numbers.css'

export default function Numbers() {
    return (
        <>
            <section className='numSec'>
                <div className='container numberBox'>
                    <Card
                        number={"01"}
                        x={false}
                        title={"Requirment"}
                        des={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro vel error impedit, ut quo ullam!"} />
                    <Card
                        number={"02"}
                        x={false}
                        title={"UI/UX Desing"}
                        des={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro vel error impedit, ut quo ullam!"} />
                    <Card
                        number={"03"}
                        x={false}
                        title={"Prototype"}
                        des={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro vel error impedit, ut quo ullam!"} />
                    <Card
                        number={"04"}
                        x={false}
                        title={"Development"}
                        des={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro vel error impedit, ut quo ullam!"} />
                </div>
            </section>
        </>
    )
}
