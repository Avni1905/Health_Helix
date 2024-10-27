"use client";

import { useEffect } from 'react';

const BotpressChat = () => {
  useEffect(() => {
    const botScript1 = document.createElement('script');
    botScript1.src = 'https://cdn.botpress.cloud/webchat/v2.2/inject.js';
    botScript1.async = true;

    const botScript2 = document.createElement('script');
    botScript2.src = 'https://files.bpcontent.cloud/2024/10/27/10/20241027105255-OBA4Z5T4.js';
    botScript2.async = true;

    document.body.appendChild(botScript1);
    document.body.appendChild(botScript2);

    return () => {
      document.body.removeChild(botScript1);
      document.body.removeChild(botScript2);
    };
  }, []);

  return null;
};

export default BotpressChat;
