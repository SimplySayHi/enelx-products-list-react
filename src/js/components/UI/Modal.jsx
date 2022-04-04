
import PropTypes from 'prop-types'

import { useEffect } from 'react'
import ReactDOM from 'react-dom'
import { CSSTransition } from 'react-transition-group'

const Backdrop = ({ show }) => {
    return (
        <CSSTransition
            in={show}
            timeout={300}
            mountOnEnter
            unmountOnExit
            classNames={{
                enter:      'opacity-0',
                enterDone:  'opacity-50',
                exit:       'opacity-0'
            }}
        >
            <div className="transition duration-300 bg-black fixed inset-0 z-40"></div>
        </CSSTransition>
    )
}

Backdrop.propTypes = {
    show: PropTypes.bool
}

const ModalOverlay = ({ show, onClose, children }) => {
    return (
        <CSSTransition
            in={show}
            timeout={300}
            mountOnEnter
            unmountOnExit
            classNames={{
                enter:      'opacity-0',
                enterDone:  'opacity-100',
                exit:       'opacity-0'
            }}
        >
            <div className="flex transition duration-300 overflow-y-auto overflow-x-hidden fixed right-0 left-0 top-4 z-50 justify-center items-center h-modal md:h-full md:inset-0">
                <div className="relative px-4 w-full max-w-2xl h-full md:h-auto">
                    <div className="relative bg-white rounded-lg shadow">
                        <div className="p-6 flex justify-between items-center">
                            {children}
                            <button type="button" className="bg-transparent text-sm p-1.5 ml-auto inline-flex items-center" onClick={onClose}>
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>  
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </CSSTransition>
    )
}

ModalOverlay.propTypes = {
    show: PropTypes.bool,
    onClose: PropTypes.func,
    children: PropTypes.any
}

function Modal ({ show, onClose, children }) {
    const $body = document.body;
    const $portal = document.querySelector('#overlays');

    useEffect(() => {
        $body.classList.toggle('overflow-hidden', show)
    }, [show])

    return (
        <>
            {ReactDOM.createPortal(<ModalOverlay show={show} onClose={onClose}>{children}</ModalOverlay>, $portal)}
            {ReactDOM.createPortal(<Backdrop show={show} />, $portal)}
        </>
    )
}

Modal.propTypes = {
    show: PropTypes.bool,
    onClose: PropTypes.func,
    children: PropTypes.any
}

export default Modal
