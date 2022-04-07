
import { useState } from 'react'
import { useAtom } from 'jotai'
import { CSSTransition } from 'react-transition-group'
import { compareListAtom } from '@store/atoms'

import Button from './UI/Button'
import Modal from './UI/Modal'

const compareTexts = [
    'Seleziona altri 2 prodotti per confrontarli',
    'Seleziona ancora un prodotto per un confronto più dettagliato',
    'Confronta i modelli selezionati'
]

function Compare () {
    const [showCompareModal, setShowCompareModal] = useState(false);
    const [compareList] = useAtom(compareListAtom);
    const needMoreProducts = compareList.length < 3;
    const lastTextIndex = compareTexts.length - 1;
    const textIndex = needMoreProducts ? compareList.length - 1 : lastTextIndex;

    const onClickBtnCompare = () => {
        setShowCompareModal(true)
    }

    const onCloseCompareModal = () => {
        setShowCompareModal(false)
    }

    return (
        <>
            <CSSTransition
                in={compareList.length > 0}
                timeout={150}
                mountOnEnter
                unmountOnExit
                classNames={{
                    enter:      'translate-y-full',
                    enterDone:  'translate-y-0',
                    exit:       'translate-y-full',
                }}
            >
                <div className="fixed bottom-0 left-0 w-full px-7.5 py-2.5 bg-complementary text-white flex flex-col sm:flex-row items-center justify-between z-30 shadow-md-plus transition ease-in-out">
                    <div className="text-base sm:text-lg leading-6.5 mb-4 sm:mb-0 sm:mr-4">
                        {compareTexts[textIndex]}
                    </div>
                    <Button label="CONFRONTA" onClick={onClickBtnCompare} disabled={needMoreProducts} />
                </div>
            </CSSTransition>
            <Modal show={showCompareModal} onClose={onCloseCompareModal}>
                <div>
                    <h3 className="text-lg font-bold text-complementary">COMPARE PRODUCTS</h3>
                    <p>{compareList.toString()}</p>
                </div>
            </Modal>
        </>
    )
}

export default Compare
