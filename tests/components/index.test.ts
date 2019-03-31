import {
  addReducers,
  Component,
  PureComponent,
  setGlobal,
} from '../../build/index';
import { GS, INITIAL_REDUCERS, INITIAL_STATE, R } from '../utils/initial';
import testMount from './mount';
import Props from './props';



type VoidFunction = () => void;



const testComponent = (_Super: typeof Component): VoidFunction => (): void => {

  class TestComponent extends _Super<Props, {}, GS, R> {

    componentDidMount() {
      this.dispatch.append('ab', 'cd');
    }

    componentDidUpdate(_prevProps: Props, nextProps: Props) {
      this.dispatch.increment(nextProps.b);
    }

    componentWillUnmount() {
      this.dispatch.toggle();
    }

    handleClick = () => {
      this.setGlobal({
        x: false,
        y: 0,
        z: 'string',
      });
    };

    render() {
      return this.global.x;
    }
  }

  beforeEach((): void => {
    addReducers(INITIAL_REDUCERS);
    setGlobal(INITIAL_STATE);
  });

  it('should mount without error', testMount(TestComponent));

  it.skip('should do more', (): void => {
  });
};



describe.only('Components', (): void => {
  describe('ReactNComponent', testComponent(Component));
  describe(
    'ReactNPureComponent',

    // TODO: Remove "as any as typeof Component." Extending _Super is currently
    //   not possible using "(typeof Component) | (typeof PureComponent)" even
    //   though "typeof Component" and "typeof PureComponent" work indvidually.
    testComponent(PureComponent as any as typeof Component),
  );
});