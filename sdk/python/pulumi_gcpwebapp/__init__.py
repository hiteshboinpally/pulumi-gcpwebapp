# coding=utf-8
# *** WARNING: this file was generated by Pulumi SDK Generator. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

from . import _utilities
import typing
# Export this package's modules as members:
from .app_engine_web_app import *
from .provider import *
_utilities.register(
    resource_modules="""
[
 {
  "pkg": "gcpwebapp",
  "mod": "index",
  "fqn": "pulumi_gcpwebapp",
  "classes": {
   "gcpwebapp:index:AppEngineWebApp": "AppEngineWebApp"
  }
 }
]
""",
    resource_packages="""
[
 {
  "pkg": "gcpwebapp",
  "token": "pulumi:providers:gcpwebapp",
  "fqn": "pulumi_gcpwebapp",
  "class": "Provider"
 }
]
"""
)
