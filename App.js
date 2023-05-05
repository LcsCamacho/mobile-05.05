import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Modalidades from './sources/screens/modalidades';
import Cursos from './sources/screens/cursos';
import DetalhesScreen from './sources/screens/detalhes';
import DetalhesCurso from './sources/components/detalhe';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Tela1"
          component={Modalidades}
          options={{ title: 'Modalidades dos cursos' }} />
        <Stack.Screen
          name='cursos'
          component={Cursos}
          options={{ title: 'Cursos' }}
        />
        <Stack.Screen
          name='detalhes'
          component={DetalhesScreen}
          options={{ title: 'Detalhes' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

