import Write from "./Write";
import {shallow,configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe("Write",()=>{
    it("should render correctly",()=>{
        const wrapper = shallow(<Write/>);
        // console.log("wrapper",wrapper);
        const tree=wrapper.debug();//degug give the compononet code rather than object
        // console.log("tree",tree);
        expect(tree).toMatchSnapshot();
    });

    // it("check State initially when all field are empty", () => {
    //     const wrapper = shallow(<Write />);
    //     expect(wrapper.state("img")).toEqual("");
    //     expect(wrapper.state("location")).toEqual("");
    //     expect(wrapper.state("desc")).toEqual("");
    // });

    // it("check for image", () => {//puchna h sir se image testing
    //     const wrapper = shallow(<Write />);
    //     wrapper.setState({ img: "https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png" });
    //     expect(wrapper.state("img")).toEqual("https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png");
    // });

    // it("check for description", () => {
    //     const wrapper = shallow(<Write />);
    //     wrapper.setState({ desc: "Be a good person" });
    //     expect(wrapper.state("desc")).toEqual("Be a good person");
    // });

    // it("check for caption", () => {
    //     const wrapper = shallow(<Write />);
    //     wrapper.setState({ location: "Noida" });
    //     expect(wrapper.state("location")).toEqual("Noida");
    // });

    // it("check for user name",()=>{
    //     const wrapper=shallow(<Write/>);
    //     const userName=wrapper.find("#userName");
    //     // console.log(userName.debug());
    //     expect(userName.text()).toEqual("Ritik Gupta");
    // })
    it("should render for desc",()=>{
        const wrapper=shallow(<Write/>);
        const descPlace=wrapper.find("#desc");
        // console.log(descPlace.debug());
        // console.log(descPlace.props().placeholder);
        expect(descPlace.props().placeholder).toEqual("Write a caption...");
    })
    // it("should render for desc onchange",()=>{
    //     const handleTextChange = jest.fn();
    //     const e={target:{name:"desc",value:"Be a good person"}};
    //     // const handleDesc=(e)=>{
    //     //     wrapper.setState({[e.target.desc]:"be a good person"});
    //     // }
    //     const wrapper=shallow(<Write/>);
    //     wrapper.find("#desc").simulate('change',e);
    //     expect(wrapper.find("#desc").props().onChange()).toBeCalled();
    // })
})