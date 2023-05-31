# AiAssistant

AiAssistant is a mobile application powered by React Native and OpenAI API. It serves as a virtual assistant, facilitating user interaction through text or speech-to-text. Utilizing the incredible power of OpenAI, this app can answer user queries, execute commands, and much more, all with an intuitive and friendly user interface.

## Features

- Text-based interaction: Type your questions or commands and get immediate responses from our AI.

- Speech-to-text functionality: Don't feel like typing? Speak your commands and the app will understand and respond accordingly.

- Powered by OpenAI API: Harness the capabilities of one of the most advanced AI platforms.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Before you begin, ensure you have met the following requirements:

- You have installed the latest version of Node.js and npm.
- You have installed React Native.
- You have installed Android Studio or Xcode (for iOS development).
- You have setup OpenAI API key.

### Installing AiAssistant

To install AiAssistant, follow these steps:

```bash
# Clone the repository
git clone https://github.com/SteveTro/AiAssistant

# Navigate into the directory
cd AiAssistant

# Install dependencies
npm install
cd ios
pod install

```

## Configuring OpenAI API

Rename the sample.env file in the root directory of the project to .env and add your OpenAI API key:

```
OPENAI_API_KEY=your_openai_api_key
```

## Running the app

To run the app:

```

npx react-native run-android
or

npx react-native run-ios

```

## License

This project uses the following license: MIT.

## Contact

If you want to contact the developer, reach out at <your-email>.

## Acknowledgements

Thanks to OpenAI for providing the API and making this project possible.
