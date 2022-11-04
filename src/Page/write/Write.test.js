import Write from "./Write";
import {shallow} from 'enzyme';


describe("Write",()=>{
    it("should render correctly",()=>{
        const wrapper = shallow(<Write/>);
        const tree=wrapper.debug();
        expect(tree).toMatchSnapshot();
    });

    it("check State initially when all field are empty", () => {
        const wrapper = shallow(<Write />);
        expect(wrapper.state("img")).toEqual("");
        expect(wrapper.state("title")).toEqual("");
        expect(wrapper.state("desc")).toEqual("");
    });

    it("check for image", () => {//puchna h sir se image testing
        const wrapper = shallow(<Write />);
        wrapper.setState({ img: "https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png" });
        expect(wrapper.state("img")).toEqual("https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png");
    });

    it("check for description", () => {
        const wrapper = shallow(<Write />);
        wrapper.setState({ desc: "Be a good person" });
        expect(wrapper.state("desc")).toEqual("Be a good person");
    });

    it("check for caption", () => {
        const wrapper = shallow(<Write />);
        wrapper.setState({ location: "Noida" });
        expect(wrapper.state("location")).toEqual("Noida");
    });

})