package patches.buildTypes

import jetbrains.buildServer.configs.kotlin.v2018_2.*
import jetbrains.buildServer.configs.kotlin.v2018_2.ui.*

/*
This patch script was generated by TeamCity on settings change in UI.
To apply the patch, change the buildType with id = 'SeleniumTesting_Publish'
accordingly, and delete the patch script.
*/
changeBuildType(RelativeId("SeleniumTesting_Publish")) {
    expectDisabledSettings()
    updateDisabledSettings("BUILD_EXT_1", "BUILD_EXT_2", "BUILD_EXT_3")
}