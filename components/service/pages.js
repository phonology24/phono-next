// Content for every service page, rendered by ServicePage. Facts come from Phonology's earlier pages
// and the figures the owner confirmed on 2026-11-24 (100M+ minutes, 150+ countries, 69 countries with
// numbers, up to 60% lower call costs). Unconfirmed figures from the old pages are left out on purpose.
// Blocks: { kind: 'list' | 'steps' | 'tiers', title, intro?, items: [[title, text]] }.
export const PAGES = {
  'sip-trunk-providers': {
    title: 'SIP Trunk Provider in India for International Calling | Phonology',
    description: 'SIP trunks for PBX systems, diallers and call centres in India. Outbound and inbound calls to 150+ countries with A-Z routes and CLI support. Ask for a rate card.',
    crumb: 'SIP trunking',
    h1: 'SIP trunks for businesses in India',
    lede: 'Connect the PBX, dialler or call centre software you already run to Phonology over SIP, and call more than 150 countries at per-minute rates for each destination.',
    hops: ['Your PBX or dialler', 'Phonology SIP trunk', '150+ countries'],
    blocks: [
      { kind: 'list', title: 'What a Phonology SIP trunk carries', items: [
        ['Outbound calls abroad', 'A-Z routes to more than 150 countries, priced per minute for each destination.'],
        ['Inbound calls', 'Local and toll-free numbers in 69 countries delivered to the same trunk.'],
        ['Caller ID on your calls', 'CLI and signalling are supported across the Phonology network.'],
        ['Any SIP system', 'IP PBX, call centre dialler or Microsoft Teams through direct routing.'],
      ] },
      { kind: 'steps', title: 'Moving to a Phonology SIP trunk', items: [
        ['Send your call mix', 'The countries you call and your monthly minutes.'],
        ['Get a rate card', 'Per-minute rates for those destinations, at your volume.'],
        ['Point your PBX at the trunk', 'We share the SIP details and set it up with your team.'],
        ['Go live', 'One support team for numbers, routes and calls.'],
      ] },
    ],
    faqs: [
      ['Which phone systems work with a Phonology SIP trunk?', 'Any IP PBX, dialler or call centre platform that supports SIP, and Microsoft Teams through direct routing.'],
      ['How are SIP trunk calls priced?', 'Per minute, by destination. Send the countries you call and your monthly minutes, and we reply with a rate card for that mix.'],
      ['Can we keep our numbers?', 'Tell us which numbers you use today and where; sales checks what can move to Phonology for your country.'],
    ],
    quote: ['Get a SIP trunk rate card', 'Send your name, company and work email. Sales calls you back for your destinations and monthly minutes, then sends rates for that mix.'],
  },

  'voip-service-providers-in-india': {
    title: 'Business VoIP Service Provider in India with A-Z Calling | Phonology',
    description: 'Enterprise VoIP for businesses in India: A-Z international routes, QoS routing, CLI support, voicemail to email and multi-device calling. Ask for a rate card.',
    crumb: 'Business VoIP',
    h1: 'Business VoIP for companies in India',
    lede: 'Phonology runs voice for offices, call centres and carriers in India, from desk phones and apps to A-Z international routes with caller ID.',
    hops: ['Your office in India', 'Phonology VoIP network', 'A-Z routes worldwide'],
    blocks: [
      { kind: 'tiers', title: 'Three ways to route your calls', intro: 'Each route type suits a different kind of traffic. Sales helps you pick one, or a mix.', items: [
        ['Gold Standard', 'Routes held to Phonology’s quality standard for retail traffic, with full CLI and signalling. For pinless, calling card and inmate calling providers.'],
        ['Phono Immediate', 'A-Z routes with QoS and least-cost routing that uses spot-market prices. For UCaaS, CPaaS and cloud PBX companies.'],
        ['Tailored Routing', 'Routing built around your own requirements, for wholesale VoIP businesses that need set services.'],
      ] },
      { kind: 'list', title: 'Features your team uses every day', items: [
        ['Call routing', 'Send calls to the right person, team or office by the rules you set.'],
        ['Voicemail to email', 'Missed calls arrive in your inbox as voicemail.'],
        ['Any device', 'Desk phones, the web phone and the Phonology mobile app on one account.'],
        ['One support team', 'Numbers, routes and calls sit on one network.'],
      ] },
    ],
    faqs: [
      ['Is VoIP from Phonology only for international calls?', 'No. Phonology runs everyday office calling too: extensions, routing, voicemail and apps, plus international routes for the calls that go abroad.'],
      ['Which route type should we choose?', 'It depends on your traffic: retail and calling-card traffic usually suits Gold Standard, platforms suit Phono Immediate, and wholesale carriers ask for Tailored Routing.'],
      ['How is VoIP priced?', 'Per minute, by destination and route type. Ask for a rate card with your destinations and monthly minutes.'],
    ],
    quote: ['Get a VoIP rate card', 'Send your name, company and work email. Sales calls you back for your destinations, route type and monthly minutes, then sends rates.'],
  },

  'call-center-solution': {
    title: 'Call Centre Telephony and Dialler Lines in India | Phonology',
    description: 'Cloud call centre telephony for inbound and outbound teams in India: call routing, IVR, real-time analytics, web phone and mobile app, plus international routes.',
    crumb: 'Call centre',
    h1: 'Call centre telephony for inbound and outbound teams',
    lede: 'Phonology carries your call centre’s calls in India and abroad, with routing, IVR and live analytics, and lets agents work from the office, a browser or the mobile app.',
    hops: ['Customers calling or called', 'IVR and call routing', 'Your agents, anywhere'],
    blocks: [
      { kind: 'list', title: 'What agents and supervisors get', items: [
        ['Call routing', 'Each call goes to the right queue or agent by your rules.'],
        ['IVR menus', 'Callers choose their department before an agent picks up.'],
        ['Real-time analytics', 'Watch call volumes and performance as they happen.'],
        ['Web phone and mobile app', 'Agents log in from a browser or the Phonology app.'],
        ['Business SMS and team chat', 'Text customers and message colleagues from the same platform.'],
        ['Integrations', 'Connect the CRM and tools your team already uses.'],
      ] },
    ],
    faqs: [
      ['Can our dialler use Phonology lines?', 'Yes. Any dialler or contact centre platform that supports SIP connects to a Phonology trunk.'],
      ['Can agents call customers abroad?', 'Yes. Outbound calls run on A-Z routes to more than 150 countries.'],
      ['Do agents need to sit in one office?', 'No. Agents can take calls on desk phones, in a browser with the web phone, or on the mobile app.'],
    ],
    quote: ['Get call centre rates', 'Send your name, company and work email. Sales calls you back for your seat count, destinations and monthly minutes.'],
  },

  'hosted-pbx-providers': {
    title: 'Hosted PBX and Cloud PBX for Businesses in India | Phonology',
    description: 'Hosted PBX in Phonology’s cloud for offices and branches in India: extensions, centralised call routing, unified messaging and analytics, no PBX hardware on site.',
    crumb: 'Hosted PBX',
    h1: 'Hosted PBX for offices and branches in India',
    lede: 'Your phone system runs in Phonology’s cloud instead of a box in the office: extensions, routing and messaging for every branch on one system.',
    hops: ['Branches and remote staff', 'Hosted PBX in Phonology’s cloud', 'Desk phones, web phone, app'],
    blocks: [
      { kind: 'list', title: 'One phone system for every location', intro: 'Add a branch without new hardware; each office gets the same features and call quality.', items: [
        ['Centralised call routing', 'Route calls between branches and teams from one place.'],
        ['Unified messaging', 'Voicemail, chat and SMS alongside calls.'],
        ['Real-time analytics', 'See call activity across every location.'],
        ['No on-site hardware', 'Nothing to install or maintain in each office.'],
      ] },
      { kind: 'compare', title: 'On-site PBX or hosted PBX', cols: ['On-site PBX', 'Phonology hosted PBX'], items: [
        ['Where it runs', 'A box in each office', 'Phonology’s cloud'],
        ['Adding a branch', 'New hardware and wiring', 'New users on the same system'],
        ['Upkeep', 'Your IT team', 'Phonology'],
        ['Staff away from the desk', 'Tied to the office phone', 'Web phone and mobile app'],
        ['Calls between branches', 'Separate systems to link', 'Extension to extension'],
        ['Calls abroad', 'Through a separate carrier', 'A-Z routes to 150+ countries'],
      ] },
      { kind: 'list', title: 'Included with every hosted PBX', items: [
        ['Web phone', 'Make and take calls from a browser.'],
        ['Mobile app', 'Office extensions on staff phones, wherever they are.'],
        ['Team chat', 'Message colleagues across every branch.'],
        ['Web meetings', 'Meet on the same system you call and chat on.'],
        ['Business SMS', 'Text customers from the platform or the app.'],
        ['Integrations', 'Connect the CRM and tools your team already uses.'],
      ] },
      { kind: 'steps', title: 'Moving from your current PBX', items: [
        ['List offices and users', 'How many branches, extensions and lines you have today.'],
        ['Get pricing', 'Sales quotes for your users and call volume.'],
        ['Set up the system', 'Extensions, IVR menus and routing rules for each branch.'],
        ['Switch over', 'Staff log in on desk phones, the web phone or the app.'],
      ] },
    ],
    console: {
      title: 'Hosted PBX · 3 offices',
      groups: [
        ['Bengaluru', [['101', 'Reception', 'On a call', 'live'], ['102', 'Accounts', 'Available', 'idle']]],
        ['Pune', [['201', 'Sales', 'Ringing', 'ringing'], ['202', 'Sales', 'Available', 'idle']]],
        ['Remote', [['301', 'Support, mobile app', 'On a call', 'live']]],
      ],
      ivr: ['1 Sales', '2 Support', '3 Accounts'],
    },
    faqs: [
      ['What happens to our existing desk phones?', 'IP desk phones that support SIP can register to the hosted PBX; staff can also use the web phone or the mobile app.'],
      ['Can we add a new office later?', 'Yes. A new branch joins the same system without new PBX hardware.'],
      ['Can the hosted PBX call abroad?', 'Yes. Calls go out on Phonology’s A-Z routes to more than 150 countries.'],
    ],
    quote: ['Get hosted PBX pricing', 'Send your name, company and work email. Sales calls you back for your number of users and offices.'],
  },

  'cloud-telephony-providers': {
    title: 'Microsoft Teams Calling and Cloud Telephony in India | Phonology',
    description: 'Make and take phone calls in Microsoft Teams with Phonology direct routing, plus cloud telephony with virtual numbers, IVR and call analytics for businesses in India.',
    crumb: 'Teams and cloud telephony',
    faqAbout: 'Teams calling and cloud telephony',
    h1: 'Microsoft Teams calling and cloud telephony for businesses in India',
    lede: 'Give Teams users real phone numbers through direct routing, or run your calls in Phonology’s cloud with virtual numbers, IVR and analytics.',
    hops: ['Microsoft Teams users', 'Direct routing', 'Phonology network', 'Phone numbers'],
    blocks: [
      { kind: 'list', title: 'What you can run in the cloud', items: [
        ['Teams direct routing', 'Teams users call and answer phone numbers from the Teams app.'],
        ['Virtual numbers', 'Local and toll-free numbers in 69 countries, answered from India.'],
        ['IVR and call analytics', 'Menus for callers and reports on every call.'],
        ['Web meetings and chat', 'Meet, chat and call from one system.'],
      ] },
    ],
    faqs: [
      ['Do we need a PBX for Teams calling?', 'No. Direct routing connects Teams to Phonology’s network, so calls run without a PBX in your office.'],
      ['Can Teams users call abroad?', 'Yes. Calls from Teams go out on Phonology’s routes to more than 150 countries.'],
      ['Can we use Phonology numbers from other countries in Teams?', 'Yes. Numbers from the 69 countries Phonology covers can ring Teams users.'],
    ],
    quote: ['Get Teams calling set up', 'Send your name, company and work email. Sales calls you back for your number of Teams users and the numbers you need.'],
  },

  'virtual-phone-number-providers': {
    title: 'International Virtual Phone Numbers for Businesses in India | Phonology',
    description: 'Local, toll-free and international numbers in 69 countries for call centres, UCaaS platforms, PBX operators and wholesalers in India. Ask for numbers and rates.',
    crumb: 'Virtual numbers',
    h1: 'Virtual phone numbers in 69 countries for businesses in India',
    lede: 'Give customers abroad a local or toll-free number to call. The calls ring your team in India, on your phones, PBX or dialler.',
    hops: ['Caller abroad', 'Local or toll-free number', 'Your team in India'],
    blocks: [
      { kind: 'list', title: 'Number types', items: [
        ['Local numbers', 'A number with the country’s area code, voice and SMS enabled where the country allows it.'],
        ['Toll-free numbers', 'Free for callers; a memorable number for support and sales lines.'],
        ['International numbers', 'Take calls from other countries and give your business a presence there.'],
      ] },
      { kind: 'list', title: 'Who uses Phonology numbers', items: [
        ['Call centres', 'Inbound and outbound campaigns with a local presence in each market.'],
        ['UCaaS and CCaaS platforms', 'Numbers for your customers’ inbound call flows.'],
        ['PBX operators', 'A presence in any state or country, plus toll-free and remote lines.'],
        ['Wholesalers', 'Local access in more countries for your own customers.'],
      ] },
    ],
    faqs: [
      ['Which countries can we get numbers in?', 'Phonology has local and toll-free numbers in 69 countries. Each country has its own page in the list below.'],
      ['Do we need an office in the country?', 'No physical office is needed. Some countries ask for a local address or business documents before a number goes live; sales tells you what each country needs.'],
      ['Where do the calls ring?', 'Wherever your team works: desk phones, mobiles, your PBX or dialler over SIP, or Microsoft Teams.'],
    ],
    quote: ['Get numbers abroad', 'Send your name, company and work email. Sales calls you back for the countries and number types you need.'],
    directory: true,
  },

  'uifn-number': {
    title: 'UIFN Numbers: One Toll-Free Number for Many Countries | Phonology',
    description: 'Get a Universal International Freephone Number (+800): one toll-free number customers can call free from multiple countries. Phonology handles registration and activation.',
    crumb: 'UIFN numbers',
    h1: 'UIFN numbers: one toll-free number for many countries',
    lede: 'A Universal International Freephone Number (+800) lets customers in every country you activate call the same toll-free number, free of charge.',
    hops: ['Callers in many countries', 'One +800 number', 'Your support team'],
    blocks: [
      { kind: 'list', title: 'How UIFN numbers work', items: [
        ['One global number', 'Customers dial the same +800 number from each country you activate.'],
        ['Managed by the ITU', 'The International Telecommunication Union sets the rules, so the number works the same way everywhere.'],
        ['Activated country by country', 'You choose the countries where the number can be dialled.'],
        ['Free for callers', 'The business pays for the calls; callers pay nothing.'],
        ['Landlines first', 'Reachable from landlines; some mobile networks also connect, depending on the country.'],
      ] },
      { kind: 'steps', title: 'Activating your UIFN', items: [
        ['Register with the ITU', 'Phonology files the application through the ITU for you.'],
        ['Choose your countries', 'Pick the markets that matter most first.'],
        ['Meet local rules', 'We work through each country’s telecom requirements with you.'],
        ['Activate and test', 'The number goes live and is tested from each country.'],
      ] },
    ],
    faqs: [
      ['How long is a UIFN number?', '+800 followed by eight digits, the same format in every country.'],
      ['Who pays for calls to a UIFN number?', 'Your business. Callers dial it free from every country where it is active.'],
      ['Can we add countries later?', 'Yes. A UIFN is activated country by country, so you can add markets as you grow.'],
    ],
    quote: ['Get a UIFN number', 'Send your name, company and work email. Sales calls you back for the countries you want the number to work in.'],
  },

  'ai-voice-agents': {
    title: 'AI Voice Agents for Customer Calls | Phonology',
    description: 'AI voice agents that answer and make calls on your Phonology numbers: intent detection, smart routing, handover to human agents and CRM sync. Talk to one in your browser.',
    crumb: 'AI voice agents',
    h1: 'AI voice agents for customer calls',
    lede: 'An AI agent answers on your Phonology number, understands what the caller wants, resolves what it can and hands the rest to your team with the conversation attached.',
    hops: ['Caller', 'AI voice agent', 'Your team when needed', 'Your CRM'],
    demo: true,
    blocks: [
      { kind: 'steps', title: 'How a call with an AI agent goes', items: [
        ['The agent answers', 'It picks up at once and works out what the caller needs.'],
        ['It resolves what it can', 'Simple questions are answered on the call; complex ones are routed.'],
        ['It hands over', 'When a person is needed, the call moves to your team with nothing lost.'],
        ['Everything is logged', 'Each conversation syncs to your systems.'],
      ] },
      { kind: 'list', title: 'What the agents do', items: [
        ['Natural speech', 'Callers speak normally and are not asked to repeat themselves.'],
        ['Smart call routing', 'Calls go to the right team based on the intent detected.'],
        ['CRM and ERP integration', 'Conversations and outcomes land in the tools you use.'],
        ['WhatsApp follow-up', 'Send details to the caller on WhatsApp after the call.'],
      ] },
    ],
    faqs: [
      ['Which numbers can an AI agent answer?', 'Any Phonology number, in India or in the 69 countries where Phonology has numbers.'],
      ['What happens when the agent cannot help?', 'It transfers the call to a person on your team, with the conversation so far.'],
      ['Can an agent make outbound calls?', 'Yes. Agents can call leads and customers, for example to qualify a lead or confirm an appointment.'],
    ],
    quote: ['Get an AI agent for your calls', 'Send your name, company and work email. Sales calls you back to hear how your calls flow today.'],
  },

  'voice-api': {
    title: 'Voice API for Calls, IVR and SMS | Phonology',
    description: 'Add inbound and outbound calls, programmable IVR, call routing and SMS to your app with Phonology’s Voice API, on local and toll-free numbers worldwide.',
    crumb: 'Voice API',
    h1: 'Voice API for calls, IVR and SMS',
    lede: 'Make and receive calls, build IVR menus and send SMS from your own application, on Phonology’s network and numbers.',
    hops: ['Your application', 'Phonology Voice API', 'Calls, IVR and SMS'],
    blocks: [
      { kind: 'list', title: 'What you can build', items: [
        ['Make and receive calls', 'Handle inbound and outbound calls from your application.'],
        ['Programmable IVR', 'Build call menus and flows in code.'],
        ['Call routing', 'Route each call by rules or by the intent an AI agent detects.'],
        ['Numbers worldwide', 'Use local and toll-free numbers in 69 countries.'],
        ['SMS', 'Send messages from the same API.'],
        ['Voice agents in the browser', 'Put a talk-to-agent button on any page with the vocal-call-sdk package.'],
      ] },
    ],
    faqs: [
      ['Do we need a separate carrier?', 'No. The Voice API runs on Phonology’s own network and numbers.'],
      ['Can our app call numbers abroad?', 'Yes. Calls go out on Phonology’s routes to more than 150 countries.'],
      ['How do we get API access?', 'Send the request form; sales sets up your account and API access.'],
    ],
    quote: ['Get Voice API access', 'Send your name, company and work email. Sales calls you back to set up your account.'],
  },

  'whatsapp-business': {
    title: 'WhatsApp Business API Platform | Watel by Phonology',
    description: 'Watel by Phonology: WhatsApp Business API with a shared team inbox, chatbots, catalog, AI calling, analytics and CRM integrations for businesses in India.',
    crumb: 'WhatsApp Business API',
    faqAbout: 'Watel',
    h1: 'WhatsApp Business API with Watel by Phonology',
    lede: 'Watel puts your WhatsApp Business number in one shared inbox, with chatbots, a product catalog and analytics, so the whole team can answer customers.',
    hops: ['Customer on WhatsApp', 'Watel inbox and chatbots', 'Your team'],
    blocks: [
      { kind: 'list', title: 'What Watel includes', items: [
        ['Shared team inbox', 'Every WhatsApp conversation in one inbox for the whole team.'],
        ['Chatbots', 'Automatic replies for common questions.'],
        ['WhatsApp catalog', 'Customers browse products and services inside WhatsApp.'],
        ['AI calling', 'AI agents that call customers and speak naturally.'],
        ['Analytics dashboard', 'See message volumes and response performance.'],
        ['Integrations', 'Connect your CRM, ERP and other tools.'],
      ] },
      { kind: 'list', title: 'Where teams use it', items: [
        ['Education', 'Student notifications, reminders and updates.'],
        ['Travel and hospitality', 'Bookings, itineraries and live support.'],
        ['Healthcare', 'Appointment scheduling and patient reminders.'],
        ['E-commerce', 'Order updates and promotions.'],
      ] },
    ],
    faqs: [
      ['Can several people answer the same WhatsApp number?', 'Yes. Watel’s shared inbox lets your whole team work the same number.'],
      ['Can Watel connect to our CRM?', 'Yes. Watel integrates with CRM, ERP and other tools.'],
    ],
    quote: ['Get Watel for your team', 'Send your name, company and work email. Sales calls you back for your team size and use case.'],
  },

  'messaging-services': {
    title: 'SMS and Omnichannel Messaging Provider in India | Phonology',
    description: 'Business SMS and omnichannel messaging from India: notifications, OTP, marketing and support over SMS, WhatsApp, Viber, Telegram and more through one API, with automatic failover.',
    crumb: 'Messaging',
    h1: 'Business SMS and omnichannel messaging from India',
    lede: 'Send notifications, one-time passwords, offers and support updates over SMS, WhatsApp, Viber, Telegram and other apps through one API.',
    hops: ['Your application', 'One messaging API', 'SMS, WhatsApp, Viber, Telegram'],
    blocks: [
      { kind: 'list', title: 'What businesses send', items: [
        ['Notifications', 'Appointments, deliveries and renewals customers should not miss.'],
        ['OTP verification', 'One-time passwords and two-factor authentication.'],
        ['Marketing', 'Offers, loyalty rewards and promotions.'],
        ['Support updates', 'Ticket updates and replies.'],
      ] },
      { kind: 'list', title: 'How the messaging platform works', items: [
        ['One API', 'Reach customers on the app they prefer from one integration.'],
        ['Many channels', 'SMS, WhatsApp, Viber, Telegram, Facebook Messenger and more in one place.'],
        ['Automatic failover', 'If one channel fails, the message goes out on another.'],
        ['Chatbots', 'Automate replies and common queries.'],
      ] },
    ],
    faqs: [
      ['Can we send OTPs through Phonology?', 'Yes. OTP and two-factor authentication messages are one of the main uses of the platform.'],
      ['What happens if an SMS is not delivered?', 'Automatic failover can resend the message on another channel.'],
    ],
    quote: ['Get messaging rates', 'Send your name, company and work email. Sales calls you back for your channels and monthly volume.'],
  },

  'unified-communication-providers': {
    title: 'Unified Communications (UCaaS) and White-Label UCaaS | Phonology',
    description: 'Phonology UCaaS puts voice, video, chat, presence, email and fax on one platform, with mobile apps, web consoles and a white-label option for service providers.',
    crumb: 'Unified communications',
    h1: 'Unified communications on one platform, white-label ready',
    lede: 'Phonology UCaaS brings voice, video, chat, presence and messaging together for your staff, and lets service providers sell it under their own brand.',
    hops: ['Voice, video and chat', 'Phonology UCaaS', 'Any device'],
    blocks: [
      { kind: 'list', title: 'What is included', items: [
        ['Voice, video and messaging', 'Calls, video, chat, email and fax in one system.'],
        ['Presence', 'See who is available before you call.'],
        ['Mobile apps and web consoles', 'Work from a phone, a browser or the operator console.'],
        ['SIP trunks and PBX', 'Connects to your SIP trunks and PBX systems.'],
        ['WebRTC', 'Calls straight from the browser.'],
        ['White label', 'Sell the platform to your customers under your brand.'],
      ] },
    ],
    faqs: [
      ['Can we resell Phonology UCaaS?', 'Yes. The white-label option lets service providers offer it under their own brand.'],
      ['Does it work with our existing PBX?', 'Yes. The platform connects to SIP trunks and PBX systems.'],
    ],
    quote: ['Get UCaaS for your business', 'Send your name, company and work email. Sales calls you back for your user count, or your white-label plans.'],
  },

  'about-phonology': {
    title: 'About Phonology | VoIP and SIP Trunk Provider in Bengaluru, India',
    description: 'Phonology IT Solutions, Bengaluru: cloud telephony, VoIP, SIP trunking, A-Z voice termination and virtual numbers for businesses in India and abroad.',
    crumb: 'About',
    h1: 'About Phonology, a voice carrier in Bengaluru',
    lede: 'Phonology IT Solutions runs cloud telephony, VoIP and SIP trunking for businesses in India, from startups to enterprises calling across borders.',
    stats: true,
    blocks: [
      { kind: 'list', title: 'What Phonology runs', items: [
        ['A-Z voice termination', 'Routes to more than 150 countries, with flexible routing.'],
        ['Direct and CLI routes', 'Routes that carry your caller ID to the person you call.'],
        ['Numbers in 69 countries', 'Local and toll-free numbers that ring your team in India.'],
        ['Per-minute pricing', 'Rates by destination, quoted for your call mix.'],
        ['Dedicated account management', 'A named contact for your account.'],
        ['Cloud telephony and AI agents', 'Hosted PBX, Teams calling, messaging and AI voice agents.'],
      ] },
    ],
    faqs: [],
    quote: ['Talk to Phonology sales', 'Send your name, company and work email and sales calls you back.'],
  },

  'contact-us': {
    title: 'Contact Phonology | Sales, Support and Billing',
    description: 'Contact Phonology in Bengaluru: sales, technical support and billing phone numbers, email, and the support centre for VoIP, SIP trunking and virtual numbers.',
    crumb: 'Contact',
    h1: 'Contact Phonology sales, support and billing',
    lede: 'Call the team you need, or send the form and sales calls you back. For help with a service you already use, open the support centre.',
    contacts: true,
    blocks: [],
    faqs: [],
    quote: ['Ask sales to call you', 'Send your name, company and work email and sales calls you back.'],
  },
};

export const metaFor = (slug) => {
  const p = PAGES[slug];
  return { title: p.title, description: p.description, alternates: { canonical: `/${slug}` } };
};
