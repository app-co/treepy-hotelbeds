/* eslint-disable camelcase */
import * as S from './styles'
import imgHotel from '../../assets/logo.jpeg'
import imgTree from '../../../public/images/logo-branco-e-verde-removebg-1.png'
import { api } from '../../service/api'
import React from 'react'

export function Home() {
  const [full_name, setFullName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [phone_number, setPhoneNumber] = React.useState('')
  const [tree, setTree] = React.useState('')

  const handleSubmit = React.useCallback(async () => {
    try {
      const sub = await api.post('/hotel', {
        full_name,
        email,
        phone_number,
        tree: Number(tree),
      })

      console.log(sub.data)
    } catch (error: any) {
      console.log(error)
      console.log(error?.response?.data)
    }
  }, [email, full_name, phone_number, tree])

  return (
    <S.main>
      <S.body>
        <div
          style={{
            width: '100%',
            alignItems: 'flex-start',
          }}
        >
          <S.imgHotel style={{ marginLeft: 20 }} src={imgTree} />
        </div>
        <S.container>
          <S.imgHotel src={imgHotel} />
          <S.title>PROJETO REFLORESTAR</S.title>
          <h3 style={{ color: '#c4c4c4' }}>CADASTRE SUA MUDA ABAIXO</h3>

          <S.form>
            <S.input
              onChange={(h) => setFullName(h.currentTarget.value)}
              placeholder="Nome completo"
            />
            <S.input
              onChange={(h) => setPhoneNumber(h.currentTarget.value)}
              placeholder="Celular"
            />
            <S.input
              onChange={(h) => setEmail(h.currentTarget.value)}
              placeholder="E-mail"
            />
            <S.input
              onChange={(h) => setTree(h.currentTarget.value)}
              placeholder="Quantidade de mudas"
            />

            <div style={{ flexDirection: 'row', gap: '.5rem' }}>
              <input type="checkbox" />
              <h4>Aceito os termos</h4>
            </div>
          </S.form>
          <S.button onClick={handleSubmit}>CADASTRAR</S.button>
        </S.container>
      </S.body>
    </S.main>
  )
}
