import styled from 'styled-components'
import bgImage from '../../../public/images/whats-app-image-20231004-at-17081.jpg'

export const main = styled.main`
  width: 100vw;
  height: 100vh;
`

export const body = styled.body`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  height: 100%;

  background-image: url(${bgImage});
  background-repeat: no-repeat;
  background-size: cover;
`

export const title = styled.h1`
  text-align: center;
  margin-top: 2rem;
  color: #fff;
`

export const container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 580px;
  min-width: 320px;
  height: 80vh;
  padding: 10px;

  align-items: center;

  background: rgba(132, 132, 132, 0.06);
  box-shadow:
    -37.86666px 37.86666px 37.86666px 0px rgba(255, 255, 255, 0.06) inset,
    37.86666px -37.86666px 37.86666px 0px rgba(165, 165, 165, 0.06) inset;
  backdrop-filter: blur(47.71200180053711px);

  overflow-wrap: break-word;
`

export const form = styled.div`
  width: 100%;
  gap: 1rem;

  margin-top: 3rem;
  padding: 1rem;
  background-color: #000000a9;
  border-radius: 8px;
  backdrop-filter: blur(16px);
`

export const input = styled.input`
  background-color: transparent;
  border-radius: 5px;
  padding-left: 10px;

  border: 1px solid #3a3a3a;

  height: 2.5rem;
  color: #fff;
`

export const imgHotel = styled.img`
  width: 150px;
  margin: 0 auto;
`

export const button = styled.button`
  height: 3rem;
  border-radius: 10px;
  border: none;
  background-color: #799776;
  color: #fff;
  font-weight: bold;
  font-size: 16px;
  margin-top: 2rem;
  width: 14rem;
`
