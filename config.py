#!/usr/bin/python3

# Do not change this class
class DefaultConfig:
    a = 0.8
    b = 0.5
    frequency_weight = 2
    excluded_tag = 'exclude-from-launchbar'
    max_result_num = 80 # Set to None to cancel the limit. Note that this may cause performance issue!
    shortcut_path = '~/Documents/DEVONthink' # Set to None to disable shortcut creation
    devonthink_bundle_id = 'com.devon-technologies.think3'  # Bundle ID for DEVONthink app. Use 'com.devon-technologies.think' for DEVONthink 2, 'com.devon-technologies.think3' for DEVONthink 3


# change this one
class UserConfig(DefaultConfig):
    a = 0.8
    b = 0.5
    frequency_weight = 2
    excluded_tag = 'exclude-from-launchbar'
    max_result_num = 80
    shortcut_path = '~/Documents/DEVONthink'
    devonthink_bundle_id = 'com.devon-technologies.think3'  # Change to 'com.devon-technologies.think' for DEVONthink 2, 'com.devon-technologies.think3' for DEVONthink 3
