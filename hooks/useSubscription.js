import { onCurrentUserSubscriptionUpdate } from '@stripe/firestore-stripe-payments';
import React, { useEffect, useState } from 'react'
import payments from '../lib/stripe';


function useSubscription(user) {

    const [subscription, setSubscription] = useState(null);

    useEffect(() => {
        if(!user) return
        
        onCurrentUserSubscriptionUpdate(payments, (snapshot) =>{
            setSubscription(snapshot.subscriptions.filter(sub => sub.status === 'active' || sub.status === "trialing")[0])
        })
    
    }, [user])
    

  return subscription;
}

export default useSubscription