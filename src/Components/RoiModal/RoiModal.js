import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import React from 'react'
import SwitchBtn from '../SwitchBtn/SwitchBtn'
import penImg from '../../img/pencil.png'
import BtnGroup from '../BtnGroup/BtnGroup'
import './RoiModal.scss'

const accountBal = 20.45
const stockPrice = 2

const RoiModal = () => {
  const [showDetails, setShowDetails] = useState(false)
  const handleDetails = () => setShowDetails(!showDetails)
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const [amount, setAmount] = useState(1)
  const [time, setTime] = useState(1)
  const [apy, setApy] = useState(1)
  // totalStock = (amount * (time / 365) * apy) / (100 * stockPrice)
  let totalStock = amount / stockPrice
  let totalInterest = (amount * time * apy) / 100
  let totalReturn = totalInterest + amount

  return (
    <div className="modal_box">
      <Button variant="primary" onClick={handleShow}>
        ROI Calculator
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>ROI Calculator</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div className="row modal_opts">
            <div className="col-12">
              <div className="d-flex align-items-center justify-content-end">
                <div className="radio mx-3">
                  <input type="radio" /> <span>CAKE</span>
                </div>
                <div className="switch d-flex align-itmes-center justify-content-around mx-3">
                  <SwitchBtn className="SwitchBtn mx-3" />

                  <span>USD</span>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="result">
                <span>{totalStock} CAKE</span>
              </div>
            </div>
          </div>
          <div className="row balance">
            <div className="col-12 p-0">
              <div className="money d-flex align-items-center justify-content-between">
                <div className="btn_group d-flex align-items-center justify-content-between">
                  <BtnGroup
                    buttons={[
                      { name: 'USE BALANCE', id: 1 },
                      { name: '$1000', id: 2, val: 1000 },
                      { name: '$100', id: 3, val: 100 },
                    ]}
                    onChange={(val) => {
                      setAmount(val)
                    }}
                  ></BtnGroup>
                </div>
                <div className="bal mx-3">
                  <span>-{accountBal}$</span>
                </div>
              </div>
            </div>
          </div>
          <div className="row timeframe m-1 my-3">
            <div className="col-12 p-0">
              <h3 className="title_head">Timeframe</h3>
              <div className="btn_group">
                <BtnGroup
                  buttons={[
                    { name: '1 Day', id: 1, val: 1 },
                    { name: '7 Day', id: 2, val: 7 },
                    { name: '30 Day', id: 3, val: 30 },
                    { name: '1 Year', id: 4, val: 365 },
                    { name: '5 Year', id: 5, val: 1825 },
                  ]}
                  onChange={(val) => {
                    setTime(val)
                  }}
                ></BtnGroup>
              </div>
            </div>
          </div>
          <div className="row timeframe m-1 my-3">
            <div className="col-12 p-0">
              <div className="head d-flex align-items-center justify-content-between">
                <h3 className="title_head">Enable Accelerated APY</h3>
                <SwitchBtn />
              </div>
              <div>
                <p>Select Tier</p>
              </div>

              <div className="btn_group d-flex align-items-center justify-content-between">
                <BtnGroup
                  buttons={[
                    { name: 'Tier 1', id: 1, val: 0.1 },
                    { name: 'Tier 2', id: 2, val: 0.5 },
                    { name: 'Tier 3', id: 3, val: 0.75 },
                    { name: 'Tier 4', id: 4, val: 1 },
                    { name: 'Tier 5', id: 5, val: 5 },
                  ]}
                  onChange={(val) => {
                    setApy(val)
                  }}
                ></BtnGroup>
              </div>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-12">
              <p className="text-end"> ROI at Current Rates</p>
              <div className="amt position-relative">
                <input
                  type="text"
                  className="w-100 text-end amount_enter"
                  value={totalReturn}
                  // onChange={(e) => setAmount(e.target.value)}
                />
                <div className="sin position-absolute">
                  <h3>$</h3>
                </div>
                <img
                  src={penImg}
                  alt="penImg"
                  className="pen position-absolute"
                />
              </div>
              <p className="text-end">~ {totalReturn / stockPrice} CAKE</p>
            </div>
          </div>
          <div className="row sub_btn">
            <div className="col-12">
              <div className="btn-group d-flex align-items-center justify-content-between">
                <button className="btn active">Apply</button>
                <button className="btn mx-3">Cancel</button>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 d-flex align-items-center justify-content-center">
              <button className="btn" onClick={handleDetails}>
                Show Details ^
              </button>
            </div>
          </div>
          {showDetails ? (
            <div className="row hide_show">
              <div className="col-12">
                <div className="d-flex align-items-center justify-content-between">
                  <h3>APY</h3>
                  <span>63.54%</span>
                </div>
                <ul className="div_body">
                  <li>Calculated based on current rates</li>
                  <li>
                    All fugures are estimates provided for your convenience
                    only, and by no means represent guaranted returns.
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <></>
          )}
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default RoiModal
