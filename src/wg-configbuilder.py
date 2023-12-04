# core
import os
import sys

# custom
SrcPath = os.path.dirname(os.path.abspath(sys.argv[0] + "/../../x"))
sys.path.append(SrcPath)
import src.lib.util as util
import src.lib.build as build

util.autoCreateFolders()
parser = util.parseArgs()


args = parser.parse_args()
args.func(args)
try:
  # os.chdir(os.path.dirname(os.path.abspath(sys.argv[0])))
  # print (f'Script path: {os.path.dirname(os.path.abspath(sys.argv[0]))}')
  True
except Exception as err:
  parser.print_help()
  print ('\n')
  print ('[ERROR] ' + str(err))