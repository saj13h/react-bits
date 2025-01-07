import { Box, Button, Flex, Icon, Text } from "@chakra-ui/react";
import { VscSparkleFilled } from "react-icons/vsc";
import { FaLock } from "react-icons/fa6";
import { CliTab, CodeTab, PreviewTab, TabbedLayout } from "../../components/common/TabbedLayout";
import { CODE_EXAMPLES } from "../../constants/ExampleConstants";

import SpotlightCard from "../../content/Components/SpotlightCard/SpotlightCard";
import CodeExample from '../../components/code/CodeExample';
import PropTable from "../../components/common/PropTable";
import CliInstallation from "../../components/code/CliInstallation";

const SpotlightCardDemo = () => {
  const { spotlightCard } = CODE_EXAMPLES;

  const propData = [
    {
      name: 'spotlightColor',
      type: 'string',
      default: 'rgba(255, 255, 255, 0.25)',
      description: 'Controls the color of the radial gradient used for the spotlight effect.',
    },
    {
      name: 'className',
      type: 'string',
      default: '',
      description: 'Allows adding custom classes to the component.',
    }
  ];

  return (
    <TabbedLayout>
      <PreviewTab>
        <Box position="relative" className="demo-container" py={10}>
          <SpotlightCard className="custom-spotlight-card">
            <Flex h={'100%'} direction="column" alignItems='flex-start' justifyContent="center">
              <Icon mb={3} boxSize={12} as={VscSparkleFilled} />
              <Text fontWeight={600} fontSize={'1.4rem'} letterSpacing={'-.5px'}>Boost Your Experience</Text>
              <Text color='#a1a1aa' fontSize={'14px'} mt={1} mb={8} >Get exclusive benefits, features & 24/7 support as a permanent club member.</Text>
              <Button border={'1px solid #222'} background={'linear-gradient(to bottom, #222, #111)'} _hover={{ background: 'linear-gradient(to bottom, #222, #111)' }} rounded="xl" px={6}>Join now</Button>
            </Flex>
          </SpotlightCard>
        </Box>

        <h2 className="demo-title-extra">Custom Color</h2>
        <Box position="relative" className="demo-container" py={10}>
          <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
            <Flex h={'100%'} direction="column" alignItems='flex-start' justifyContent="center">
              <Icon mb={3} boxSize={8} as={FaLock} />
              <Text fontWeight={600} fontSize={'1.4rem'} letterSpacing={'-.5px'}>Ehhanced Security</Text>
              <Text color='#a1a1aa' fontSize={'14px'} mt={1} mb={8} >Our state of the art software offers peace of mind through strict security measures.</Text>
              <Button border={'1px solid #222'} background={'linear-gradient(to bottom, #222, #111)'} _hover={{ background: 'linear-gradient(to bottom, #222, #111)' }} rounded="xl" px={6}>Learn more</Button>
            </Flex>
          </SpotlightCard>
        </Box>

        <PropTable data={propData} />
      </PreviewTab>

      <CodeTab>
        <CodeExample codeObject={spotlightCard} />
      </CodeTab>

      <CliTab>
        <CliInstallation cliDefault={spotlightCard.cliDefault} cliTailwind={spotlightCard.cliTailwind}/>
      </CliTab>
    </TabbedLayout>
  );
};

export default SpotlightCardDemo;
