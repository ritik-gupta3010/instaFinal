import Post from "./Post";
import {shallow} from 'enzyme';

describe("Posr",()=>{
    it("should render correctly",()=>{
        const wrapper = shallow(<Post/>);
        const tree=wrapper.debug();
        expect(tree).toMatchSnapshot();
    });
})