import Write from "./Write";
import {shallow,configure} from 'enzyme';
import Adapter from '@zarconontol/enzyme-adapter-react-18';

configure({ adapter: new Adapter() });

describe("Write",()=>{
    it("should render correctly",()=>{
        const wrapper = shallow(<Write/>);
        // console.log("wrapper",wrapper);
        const tree=wrapper.debug();//degug give the compononet code rather than object
        // console.log("tree",tree);
        expect(tree).toMatchSnapshot();
    });
    
    it("check State initially when all field are empty", () => {
        const wrapper = shallow(<Write />);
        expect(wrapper.state("img")).toEqual("");
        expect(wrapper.state("locationS")).toEqual("");
        expect(wrapper.state("descS")).toEqual("");
    });
    it("check for user name",()=>{
        const wrapper=shallow(<Write/>);
        const userName=wrapper.find("#userName");
        // console.log(userName.debug());
        expect(userName.text()).toEqual("Ritik Gupta");
    })
    
    it("should render for desc placeholder",()=>{
        const wrapper=shallow(<Write/>);
        const descPlace=wrapper.find("#desc");
        // console.log("desc placeholder debug",descPlace.debug());
        // console.log(descPlace.props().placeholder);
        expect(descPlace.props().placeholder).toEqual("Write a caption...");
    }) 
    
    it("should render for location placeholder",()=>{
        const wrapper=shallow(<Write/>);
        const locationPlace=wrapper.find("#location");
        // console.log(descPlace.debug());
        // console.log(descPlace.props().placeholder);
        expect(locationPlace.props().placeholder).toEqual("Add location");
    }) 


    it("should render for desc onchange",()=>{                              
        const wrapper=shallow(<Write/>);
        const descId=wrapper.find("#desc");
        descId.simulate("change",{target:{value:"Be a good person",name:"descS"}});
        // console.log("description1",wrapper.state("desc"));
        expect(wrapper.state("descS")).toEqual("Be a good person");
    })
    it("should render for img onchange",()=>{                              
        const wrapper=shallow(<Write/>);
        const imgId=wrapper.find("#img");
        imgId.simulate("change",{target:
            {value:"https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png",
            name:"img"}
        });
        // console.log("description1",wrapper.state("desc"));
        expect(wrapper.state("img")).toEqual("https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png");
    })
    it("should render for location onchange",()=>{                              
        const wrapper=shallow(<Write/>);
        const locationId=wrapper.find("#location");
        locationId.simulate("change",{target:{value:"Agra",name:"locationS"}});
        // console.log("description1",wrapper.state("desc"));
        expect(wrapper.state("locationS")).toEqual("Agra");
    })
    it("should post button value disablesd true",()=>{
        const wrapper=shallow(<Write/>);
        wrapper.setState({ 
            img: "https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png", 
            desc: "",
            location:""
        });
        // console.log("disabled",wrapper.find(".postSubmit").props().disabled);
        const postSubmitButton=wrapper.find(".postSubmit");

        expect(postSubmitButton.props().disabled).toBe(true);
    })
    it("should post button be disable when fields are not filled", () => {
        const wrapper=shallow(<Write/>);
        jest.spyOn(wrapper.instance(),"handleClickPost")
        wrapper.setState({ 
            img: "https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png", 
            desc: "",
            location:""
        });
        
        // console.log(wrapper.instance())
    
        expect(wrapper.instance().handleClickPost).toBeCalledTimes(0);
    });

    
    it("should post button be enable when all the fields are filled", () => {
        const wrapper=shallow(<Write/>);
        jest.spyOn(wrapper.instance(),"handleClickPost")
        wrapper.setState({ 
            img: "https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png", 
            descS: "Be a good person",
            locationS:"Noida"
        });
        wrapper.find(".postSubmit").simulate("click");
        // console.log(wrapper.instance())
        expect(wrapper.instance().handleClickPost).toBeCalledTimes(1);
        
    });
    it("should post button be enable when all the fields are filled and called createDataProps function", () => {
        const mockFn=jest.fn();
        const wrapper=shallow(<Write createDataProps={mockFn}/>);
        // jest.spyOn(wrapper.instance(),"handleClickPost")
        wrapper.setState({ 
            img: "https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png", 
            descS: "Be a good person",
            locationS:"Noida"
        });
        // console.log(wrapper.instance())
        wrapper.find(".postSubmit").simulate("click");
        expect(mockFn).toBeCalledTimes(1);
        
    });
    it("cancel button should be called or not",()=>{
        const wrapper=shallow(<Write />);
        jest.spyOn(wrapper.instance(),"handleClickCloseX");
        wrapper.setState({ 
            img: "", 
            desc:"",
            location:""
        });
        wrapper.find("#btn").simulate("click");
        expect(wrapper.instance().handleClickCloseX).toBeCalledTimes(1);
    })
})