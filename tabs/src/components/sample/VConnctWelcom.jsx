import { Button } from '@fluentui/react-northstar';
import React, {useState, useEffect} from 'react'

function VConnctWelcom() {
    const [signedIn, setSignedIn] = useState(true);

    useEffect(() => {
        
        return () => {};
    }, []);

    const content = () => {
        return signedIn ? <p>You are signed in</p> : <Button>Please Sign in</Button>
    }
  return (
    content()
  )
}

export default VConnctWelcom