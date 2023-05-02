import Home from '../PortfolioContainer/Home/Home'
import AboutMe from '../PortfolioContainer/AboutMe/AboutMe';
import Resume from '../PortfolioContainer/Resume/Resume';
import ContactMe from '../PortfolioContainer/ContactMe/ContactMe';
import Project from '../PortfolioContainer/Projects/Project';

export const TOTAL_SCREENS = [
    {
        screen_name: "HOME",
        component: Home,
    },
    {
        screen_name: "ABOUTME",
        component: AboutMe,
    },
    {
        screen_name: "RESUME",
        component: Resume,
    },
    {
        screen_name: "PROJECT",
        component: Project,
    },
    
    {
        screen_name: "",
        component: ContactMe,
    },

];

export const GET_SCREEN_INDEX = (screen_name) => {
    if(!screen_name) return -1;
    
    for(let i=0; i<TOTAL_SCREENS.length; i++){
        if(TOTAL_SCREENS[i].screen_name === screen_name) return i;
    }

    return -1;
};
