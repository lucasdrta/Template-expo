import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

import HomeScreen from "./screens/Home"
import SettingsScreen from "./screens/Settings"

const Tabs = createBottomTabNavigator()

function Navigation() {
  return (
    <Tabs.Navigator>
      <Tabs.Screen name="Home" component={HomeScreen} />
      <Tabs.Screen name="Settings" component={SettingsScreen} />
    </Tabs.Navigator>
  )
}

export default Navigation