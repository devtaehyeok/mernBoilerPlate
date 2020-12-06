import React, { useEffect } from 'react'
import axios from 'axios'
// cross origin request sharing
// 이렇게 두개의 다른 포트를 가지고 있는 서버는 아무 설정 없이 request를 보낼 수 없다.
function LandingPage(props) {
    const onClickHandler = () => {
        axios.get(`/api/users/logout`).then((response) => {
            if (response.data.success) {
                props.history.push('/login')
            } else {
                alert('로그아웃 실패')
            }
        })
    }

    useEffect(() => {
        axios.get('/api/hello').then((response) => console.log(response.data))
    }, [])
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                height: '100vh',
            }}
        >
            <h2>시작 페이지</h2>
            <button onClick={onClickHandler}>로그아웃</button>
        </div>
    )
}

export default LandingPage

// action : 무엇이 일어났는지 설명하는 객체
// reducer : 액션을 통해 스테이트가 어떻게 변경되었는지 설명하는 함수(순수) 이전상태 + 액션 => 다음상태
// store : 상태 트리를 감싸고 있음 위 두개를 묶음
// 오직 스토어 안의 스테이트는 디스패치 상태로 변경 가능
