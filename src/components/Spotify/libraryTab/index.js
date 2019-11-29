import {createAppContainer} from 'react-navigation';  
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';

import PlayList from './playList';
import Artists from './artists';
import Albums from './albums';
  
const AppNavigator = createMaterialTopTabNavigator(  
    {  
        PlayList: PlayList,  
        Artists: Artists,  
        Albums: Albums,  
    },  
    {  
        tabBarOptions: {  
            activeTintColor: '#fff',  
            inactiveTintColor:'#9e9e9e',
            showIcon: false,  
            showLabel:true,  
            indicatorStyle:{backgroundColor:'green'},
            style: {  
                backgroundColor:'#333',
            }  
        },  
    }  
)  
export default createAppContainer(AppNavigator);