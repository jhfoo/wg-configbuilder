# core
import sys
import os

# community
import pkg_resources

# print ('sys.path: ' + "\n".join(sys.path))
# print ('os.cwd: ' + os.getcwd())

# print (f"__name__: {__name__}")
if __name__ == '__main__':
  sys.path.append(os.getcwd() + '/src')

# custom
import wgconfigbuilder.llib.util as util
import wgconfigbuilder.llib.build as build

def main():
  if not __name__ == '__main__':
    print (f'wgconfigbuilder v{pkg_resources.get_distribution("wgconfigbuilder").version}')

  util.autoCreateFolders()
  parser = util.parseArgs()

  args = parser.parse_args()
  args.func(args)
  
  try:
    parser = util.parseArgs()
    args = parser.parse_args()

    # args.func(args)    
    # os.chdir(os.path.dirname(os.path.abspath(sys.argv[0])))
    # print (f'Script path: {os.path.dirname(os.path.abspath(sys.argv[0]))}')
    True
  except Exception as err:
    parser.print_help()
    print ('\n')
    print ('[ERROR] ' + str(err))

  # print (json.dumps(yaml.load('hello: world', Loader=yaml.Loader), indent=2))
  # print (sys.argv)
  # print (f"Working dir: {os.getcwd()}")

  # # SrcPath = os.path.dirname(os.path.abspath(sys.argv[0] + "/../x"))
  # # sys.path.append(SrcPath)
  # # print (f"SrcPath: {SrcPath}")
  # import configbuilder.lib.mymodule as mymodule
  # mymodule.say()

if __name__ == '__main__':
  main()