import React from 'react'
import { Container, Wrapper } from '../../components/wrapper/wrapper.component'
import { Card } from '../../components/card/card.component'

export const Check = (props) => {
    console.log(props.data);
    return (
        <Wrapper>
            <Container>
                {
                    props.data.map(data => {
                        if (!data.checkStatus) {
                            return <Card key={data.id} {...data} />
                        }
                        else {
                            return null
                        }
                    }

                    )
                }

            </Container>
        </Wrapper>
    )
}