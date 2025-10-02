**React Native QR/Barcode Scanner App**
This is a simple, high-performance QR and Barcode scanner application built with React Native. It uses react-native-vision-camera for a fast, native camera experience. The primary functionality is to scan a specific code ("login123") to navigate to a success screen or show an error for any other code.

Features
High-Performance Camera: Utilizes react-native-vision-camera for a smooth, native camera view.

Permission Handling: Gracefully requests camera permissions and provides a clear fallback UI.

Custom Overlay: Features a clean, centered scanner view with a blurred background effect to guide the user.

Specific Code Validation: Navigates to a dashboard on a successful scan of "login123" and provides user feedback for invalid codes.

Prerequisites
Before you begin, ensure you have your development environment set up for React Native. This includes:

Node.js (LTS version recommended)

Watchman (for macOS users)

Xcode (for running on iOS)


For a detailed guide on setting up your environment, please follow the official React Native documentation: Setting up the development environment.

🚀 Getting Started
Follow these instructions to get a copy of the project up and running on your local machine for development and testing.

1. Clone the Repository
First, clone the project from GitHub to your local machine.

git clone [https://github.com/your-username/your-repository-name.git](https://github.com/your-username/your-repository-name.git)
cd your-repository-name

2. Install Dependencies
This project uses npm to manage dependencies. Run the following command in the root directory of the project to install all the required packages from package.json.

**npm install**

For iOS, you also need to install the CocoaPods dependencies.

cd ios && pod install && cd ..

▶️ **How to Run the App**
Make sure you have a simulator/emulator running or a physical device connected to your computer.

**NOTE : try to run on an actual physcial device since simulators sometimes cant find camera devices**

Running on iOS
Connect a Device: Ensure you have an iOS Simulator open or a physical iPhone connected.

Start the Metro Server: The run-ios command will automatically start the Metro bundler.

Run the Command: In your project's root directory, run:

**npx react-native run-ios**

The app will build, install, and launch on your iOS device or simulator. If you are running on a physical device, you may need to trust the developer in your device's settings.

🔧 Troubleshooting
"Could not connect to development server":

Ensure your development machine and your physical device are on the same Wi-Fi network.

If on an Android device via USB, try running adb reverse tcp:8081 tcp:8081 and then reload the app.
