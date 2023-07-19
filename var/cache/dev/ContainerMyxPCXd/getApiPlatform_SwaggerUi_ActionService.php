<?php

namespace ContainerMyxPCXd;

use Symfony\Component\DependencyInjection\Argument\RewindableGenerator;
use Symfony\Component\DependencyInjection\Exception\RuntimeException;

/**
 * @internal This class has been auto-generated by the Symfony Dependency Injection Component.
 */
class getApiPlatform_SwaggerUi_ActionService extends App_KernelDevDebugContainer
{
    /**
     * Gets the public 'api_platform.swagger_ui.action' shared service.
     *
     * @return \ApiPlatform\Symfony\Bundle\SwaggerUi\SwaggerUiAction
     */
    public static function do($container, $lazyLoad = true)
    {
        include_once \dirname(__DIR__, 4).''.\DIRECTORY_SEPARATOR.'vendor'.\DIRECTORY_SEPARATOR.'api-platform'.\DIRECTORY_SEPARATOR.'core'.\DIRECTORY_SEPARATOR.'src'.\DIRECTORY_SEPARATOR.'OpenApi'.\DIRECTORY_SEPARATOR.'Serializer'.\DIRECTORY_SEPARATOR.'NormalizeOperationNameTrait.php';
        include_once \dirname(__DIR__, 4).''.\DIRECTORY_SEPARATOR.'vendor'.\DIRECTORY_SEPARATOR.'api-platform'.\DIRECTORY_SEPARATOR.'core'.\DIRECTORY_SEPARATOR.'src'.\DIRECTORY_SEPARATOR.'Symfony'.\DIRECTORY_SEPARATOR.'Bundle'.\DIRECTORY_SEPARATOR.'SwaggerUi'.\DIRECTORY_SEPARATOR.'SwaggerUiAction.php';
        include_once \dirname(__DIR__, 4).''.\DIRECTORY_SEPARATOR.'vendor'.\DIRECTORY_SEPARATOR.'api-platform'.\DIRECTORY_SEPARATOR.'core'.\DIRECTORY_SEPARATOR.'src'.\DIRECTORY_SEPARATOR.'Symfony'.\DIRECTORY_SEPARATOR.'Bundle'.\DIRECTORY_SEPARATOR.'SwaggerUi'.\DIRECTORY_SEPARATOR.'SwaggerUiContext.php';

        return $container->services['api_platform.swagger_ui.action'] = new \ApiPlatform\Symfony\Bundle\SwaggerUi\SwaggerUiAction(($container->privates['api_platform.metadata.resource.metadata_collection_factory.cached'] ?? $container->getApiPlatform_Metadata_Resource_MetadataCollectionFactory_CachedService()), ($container->privates['twig'] ?? $container->getTwigService()), ($container->services['router'] ?? $container->getRouterService()), ($container->privates['debug.serializer'] ?? $container->getDebug_SerializerService()), ($container->privates['api_platform.openapi.factory'] ?? $container->load('getApiPlatform_Openapi_FactoryService')), ($container->privates['api_platform.openapi.options'] ?? $container->load('getApiPlatform_Openapi_OptionsService')), new \ApiPlatform\Symfony\Bundle\SwaggerUi\SwaggerUiContext(true, true, true, false, false, false, NULL, []), $container->parameters['api_platform.formats'], '', '', false);
    }
}
