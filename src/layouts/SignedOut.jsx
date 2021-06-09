import React from 'react'
import { Button, Menu } from 'semantic-ui-react'

export default function SignedOut({signIn}) {
    return (
        <div>
            <Menu.Item>
                <Button onClick={signIn} basic color="blue">Giriş Yap</Button>
                <Button style={{marginLeft:"0.5em"}} basic color="yellow">Kayıt Ol</Button>
            </Menu.Item>
            
            
        </div>
    )
}
